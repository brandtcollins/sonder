import React, { useEffect, useReducer } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Container, Row } from "react-bootstrap";
import NoteList from "../components/NoteList/NoteList";
import Note from "../components/Note/Note";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import produce from "immer";
import {
  faBriefcase,
  faHashtag,
  faHeart,
  faCode,
  faPaintBrush,
  faMusic,
  faHome,
  faPaw,
  faEdit,
  faTag,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faBriefcase,
  faHashtag,
  faHeart,
  faCode,
  faPaintBrush,
  faMusic,
  faHome,
  faPaw,
  faEdit,
  faTag,
  faSave,
  faTrash
);

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      dispatch({ type: "loadLocalStorage", payload: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  });

  const searchNotes = () => {
    const noteIndex =
      state.selectedNoteID === 5555
        ? 0
        : state.notes.findIndex(
            (noteItem) => noteItem.id === state.selectedNoteID
          );

    dispatch({
      type: "foundNoteIndex",
      payload: noteIndex,
    });
  };

  const updateSelectedNote = () => {
    const newCategoryNote = state.notes.find(
      (noteItem) => noteItem.category === state.category
    );
    if (newCategoryNote) {
      dispatch({ type: "selectedNote", payload: newCategoryNote.id });
    }
  };

  useEffect(searchNotes, [state.selectedNoteID]);
  useEffect(updateSelectedNote, [state.category]);
  return (
    <Container fluid>
      <Row>
        <Sidebar
          notes={state.notes}
          setCategory={(categoryName) =>
            dispatch({ type: "setCategory", payload: categoryName })
          }
        />
        <NoteList
          createNote={(newNote) =>
            dispatch({ type: "createNewNote", payload: newNote })
          }
          notes={state.notes}
          category={state.category}
          selectedNoteID={state.selectedNoteID}
          setSelectedNote={(listItem) =>
            dispatch({ type: "selectedNote", payload: listItem.id })
          }
        />
        <Note
          inputChange={(event) =>
            dispatch({ type: "inputChange", payload: event.target })
          }
          categoryChange={(item) =>
            dispatch({ type: "noteCategoryChange", payload: item })
          }
          deleteNote={(id) => dispatch({ type: "deleteNote", payload: id })}
          notes={
            state.selectedNoteID === 5555
              ? state.blankNote
              : state.notes[state.foundNoteIndex]
          }
        />
      </Row>
    </Container>
  );
}

export default App;
