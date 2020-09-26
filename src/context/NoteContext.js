import produce from "immer";
import React, { useReducer } from "react";

const initialState = {
  notes: [
    {
      id: 123,
      time: Date.now(),
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
  switch (action.type) {
    case "loadLocalStorage":
      return produce(state, (draft) => {
        draft.notes = payload.notes;
        draft.category = payload.category;
      });
    case "createNewNote":
      return produce(state, (draft) => {
        draft.notes = draft.notes.concat(action.payload);
      });
    case "deleteNote":
      const categoryArr = state.notes.filter(
        (noteItem) => noteItem.category === state.category
      );
      const deletedNoteIndex = categoryArr.findIndex(
        (noteItem) => noteItem.id === state.selectedNoteID
      );
      let newNote;
      (() => {
        if (deletedNoteIndex === 0 && categoryArr.length > 1) {
          newNote = categoryArr[deletedNoteIndex + 1].id;
        } else if (deletedNoteIndex === 0 && categoryArr.length <= 1) {
          newNote = state.blankNote.id;
        } else {
          newNote = categoryArr[deletedNoteIndex - 1].id;
        }
      })();

      return produce(state, (draft) => {
        draft.selectedNoteID = newNote;
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
