import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'


function App() {

  const [notes, SetNotes] = useState([
    {
      title: "This is the first note, click to open and edit your note",
      content: "Vanquish the impossible the only home we've ever known rogue as a patch of light Apollonius of Perga the ash of stellar alchemy."
    }
  ]);
  const [selectedNote, setSelectedNote] = useState(0);

  const addNote = (newNote) => {
    SetNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  const handleClick = (item) => {
    setSelectedNote(item)
    console.log(`Selected item is: ${selectedNote.id}`)
  }

  return (
      <Container fluid>
        <Row>
          <Sidebar />
          <NoteList notes={notes} selectedNote={selectedNote} setSelectedNote={handleClick} />
          <Note onAdd={addNote} />
        </Row>
      </Container>
  );
}

export default App;
