import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


function App() {
  let uniqid = require('uniqid');

  //useState Hook for Note input to create new item in the notelist
  const [notes, setNotes] = useState([
    {
      id: uniqid(),
      icon: "fa-briefcase",
      title: "This is the first note, click to open and edit your note",
      content: "Vanquish the impossible the only home we've ever known rogue as a patch of light Apollonius of Perga the ash of stellar alchemy."
    },
    {
      id: uniqid(),
      icon: "fa-code",
      title: "This is the second note, click to open and edit this note",
      content: "Something incredible is waiting to be known vastness is bearable only through love dispassionate extraterrestrial observer and billions upon billions upon billions upon billions upon billions upon billions upon billions"
    },
  ]);

  //useState Hook for note list items to reference in knowing which item is selected
  const [selectedNote, setSelectedNote] = useState(notes[0]);


  // Add note function to submit a new note from user
  const createNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //Delete Note button found on Note.js
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      })
    })
  }

  //Handling input change on Note.js
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotes(
      notes.map(noteItem => 
        noteItem.id === selectedNote.id ? {
          ...noteItem,
              [name]: value
        } : noteItem)
    );
}
  
  return (
      <Container fluid>
        <Row>
          <Sidebar />
          <NoteList 
                createNote={createNote}
                notes={notes}
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote} />
          <Note 
                inputChange={handleInputChange}
                deleteNote={deleteNote}
                selectedNote={selectedNote}
                />
        </Row>
      </Container>
  );
}

export default App;
