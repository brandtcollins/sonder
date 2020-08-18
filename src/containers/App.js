import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from '../components/NoteList/NoteList';
import Note from '../components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  const [notes, setNotes] = useState([
    {
      id: 123,
      icon: "fa-briefcase",
      title: "This is the first note, click to open and edit your note",
      content: "Vanquish the impossible the only home we've ever known rogue as a patch of light Apollonius of Perga the ash of stellar alchemy."
    }
  ]);

  const [selectedNoteID, setSelectedNoteID] = useState(123);
  const [foundNote, setFoundNote] = useState(notes[0]);

  //Load notes from Localstorage
  useEffect(() => {
    const data = localStorage.getItem('notes')
    if (data) {
      setNotes(JSON.parse(data))
    }
  }, [])

  //Save notes to localstorage as well as search note for Note.js to display
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
    searchNotes();
  });

  const createNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = (id) => {
    //Find the next note's index to display once current note is deleted.
    const deletedNoteIndex = notes.findIndex(noteItem => noteItem.id === id);
    const newIndexToDisplay = deletedNoteIndex - 1;
    setSelectedNoteID(notes[newIndexToDisplay].id)

    //Filter Notes and delete the note with matching ID
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      })
    })
  }

  const handleClick = (listItem) => {
    const selectedID = listItem.id;
    setSelectedNoteID(selectedID);
  }

  const searchNotes = () => {
    const foundNote = notes.findIndex(noteItem => noteItem.id === selectedNoteID)
    setFoundNote(notes[foundNote])
  }

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
