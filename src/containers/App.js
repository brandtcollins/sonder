import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Container, Row } from "react-bootstrap";
import NoteList from "../components/NoteList/NoteList";
import Note from "../components/Note/Note";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NoteContext } from "../context/NoteContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
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

function App() {
  const noteContext = useContext(NoteContext);
  const { state, dispatch } = noteContext;

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      dispatch({ type: "loadLocalStorage", payload: JSON.parse(data) });
    }
  }, [dispatch]);

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
