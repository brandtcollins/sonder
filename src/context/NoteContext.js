import produce from "immer";
import React, { useReducer } from "react";

const initialState = {
  notes: [
    {
      id: 123,
      category: "General",
      icon: "fa-briefcase",
      title: "This is the first note, click to open and edit your note",
      content:
        "Select a note from the list on the left and then click the edit icon on the top right.  Enter your notes and then save!",
    },
  ],
  selectedNoteID: 123,
  foundNoteIndex: 0,
  category: "General",
  blankNote: {
    id: 5555,
    category: "General",
    icon: "fa-briefcase",
    title: "Well, this is awkward.",
    content:
      "You've deleted all the notes in this category, create a new note or select a different category in the sidebar.",
  },
};

export const NoteContext = React.createContext(initialState);

const reducer = (state, action) => {
  const { payload } = action;
  const { id, title, content, icon, category } = action.payload;
  switch (action.type) {
    case "loadLocalStorage":
      return produce(state, (draft) => {
        draft.notes = payload;
      });
    case "createNewNote":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: id,
            title: title,
            content: content,
            icon: icon,
            category: category,
          },
        ],
      };
    case "deleteNote":
      const categoryArr = state.notes.filter(
        (noteItem) => noteItem.category === state.category
      );

      const deletedNoteIndex = categoryArr.findIndex(
        (noteItem) => noteItem.id === state.selectedNoteID
      );

      let testingVar;

      const newNoteToDisplay = () => {
        if (deletedNoteIndex === 0 && categoryArr.length > 1) {
          console.log(`1st conditional`);
          testingVar = categoryArr[deletedNoteIndex + 1].id;
        } else if (deletedNoteIndex === 0 && categoryArr.length <= 1) {
          console.log(`2nd conditional`);
          console.log(state.blankNote);
          testingVar = state.blankNote.id;
        } else {
          console.log(`3rd conditional`);
          testingVar = categoryArr[deletedNoteIndex - 1].id;
        }
      };
      newNoteToDisplay();

      return produce(state, (draft) => {
        draft.selectedNoteID = testingVar;
        draft.notes = state.notes.filter((noteItem) => noteItem.id !== payload);
      });
    case "selectedNote":
      return produce(state, (draft) => {
        draft.selectedNoteID = payload;
      });

    case "foundNoteIndex":
      return produce(state, (draft) => {
        draft.foundNoteIndex = payload;
      });
    case "setCategory":
      const categoryArray = state.notes.filter(
        (noteItem) => noteItem.category === state.category
      );
      let firstNoteInCategory;

      if (categoryArray.length === 0) {
        firstNoteInCategory = state.notes[0];
      } else {
        firstNoteInCategory = state.notes.find(
          (noteItem) => noteItem.category === state.category
        );
      }

      return produce(state, (draft) => {
        draft.category = payload;
        draft.selectedNoteID = firstNoteInCategory.id;
      });

    case "noteCategoryChange":
      const updatedNotes = state.notes.map((noteItem) =>
        noteItem.id === state.selectedNoteID
          ? {
              ...noteItem,
              category: payload,
            }
          : noteItem
      );
      return produce(state, (draft) => {
        draft.notes = updatedNotes;
        draft.category = payload;
      });

    case "inputChange":
      const { name, value } = payload;
      const updatedInputs = state.notes.map((noteItem) =>
        noteItem.id === state.selectedNoteID
          ? {
              ...noteItem,
              [name]: value,
            }
          : noteItem
      );
      return produce(state, (draft) => {
        draft.notes = updatedInputs;
      });
    default:
      return state;
  }
};

const NoteContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NoteContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
