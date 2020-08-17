import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from '../components/NoteList/NoteList';
import Note from '../components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  let uniqid = require('uniqid');

  //Hook for Note input to create new item in the notelist
  const [notes, setNotes] = useState([
    {
      id: 123,
      icon: "fa-briefcase",
      title: "This is the first note, click to open and edit your note",
      content: "Vanquish the impossible the only home we've ever known rogue as a patch of light Apollonius of Perga the ash of stellar alchemy."
    }
  ]);

  //Hook to update selectedNoteID for noteList.js and Note.js
  const [selectedNoteID, setSelectedNoteID] = useState(123);

  //Hook to update foundNote for Note.js
  const [foundNote, setFoundNote] = useState(notes[0]);

  //Hook to update note.js when a new note is selected in noteList.js

  useEffect(() => {
    const data = localStorage.getItem('notes')
    if (data) {
      setNotes(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
    searchNotes();
  });

  //Add note function to submit a new note from user
  const createNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //Delete note button found on Note.js
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      })
    })
  }

  //Handle a click on NoteList.js 
  const handleClick = (item) => {
    const selectedID = item.id;
    setSelectedNoteID(selectedID);
  }

  //Search notes and find the index of the selected note
  const searchNotes = () => {
    const foundSingleNote = notes.findIndex(noteItem => noteItem.id === selectedNoteID)
    setFoundNote(notes[foundSingleNote])
  }

  //Handling input change for the selected note on Note.js
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotes(
      notes.map(noteItem => 
        noteItem.id === selectedNoteID ? {
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
                selectedNote={selectedNoteID}
                setSelectedNote={handleClick}
                />
          <Note 
                inputChange={handleInputChange}
                deleteNote={deleteNote}
                selectedNote={selectedNoteID}
                notes={foundNote}
                />
        </Row>
      </Container>
  );
}

export default App;
