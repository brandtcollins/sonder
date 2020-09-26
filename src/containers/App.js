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
// prettier-ignore
import {faBriefcase,faHashtag,faHeart,faCode,faPaintBrush,faMusic,faHome,faPaw,faEdit,faTag,faSave,faTrash,} from "@fortawesome/free-solid-svg-icons";
// prettier-ignore
library.add(fab,faBriefcase,faHashtag,faHeart,faCode,faPaintBrush,faMusic,faHome,faPaw,faEdit,faTag,faSave,faTrash);

function App() {
  const noteContext = useContext(NoteContext);
  const { state, dispatch } = noteContext;

  useEffect(() => {
    const data = localStorage.getItem("state");
    if (data) {
      dispatch({ type: "loadLocalStorage", payload: JSON.parse(data) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
        <Sidebar />
        <NoteList />
        <Note />
      </Row>
    </Container>
  );
}

export default App;
