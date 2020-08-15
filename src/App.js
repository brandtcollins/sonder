import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


function App() {
  let uniqid = require('uniqid');

  //Hook for Note input to create new item in the notelist
  const [notes, setNotes] = useState([
    {
      id: 123,
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

  const [selectedNoteID, setSelectedNoteID] = useState(123);
  const [foundNote, setFoundNote] = useState(0);

  useEffect(() => {
    searchNotes();
  });

  const searchNotes = () => {
    const foundSingleNote = notes.findIndex(noteItem => noteItem.id === selectedNoteID)
    setFoundNote(foundSingleNote)
  }


  //Add note function to submit a new note from user
  const createNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //Delete Note button found on Note.js
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      })
    })
  }

  //Handle click on NoteList.js 
  const handleClick = (item) => {
    const selectedID = item.id;
    setSelectedNoteID(selectedID);
  }

  //Handling input change on Note.js
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
                foundNote={foundNote}
                notes={notes}
                />
        </Row>
      </Container>
  );
}

export default App;
