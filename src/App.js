import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'


function App() {

  //useState Hook for Note input to create new item in the notelist
  const [notes, SetNotes] = useState([
    {
      id: 0,
      title: "This is the first note, click to open and edit your note",
      content: "Vanquish the impossible the only home we've ever known rogue as a patch of light Apollonius of Perga the ash of stellar alchemy."
    }
  ]);

  //useState Hook for note list items to reference in knowing which item is selected
  const [selectedNote, setSelectedNote] = useState();


  // Add note function to submit a new note from user
  const addNote = (newNote) => {
    SetNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //Click event handler to change styles on list items.
  const handleClick = (item, index) => {
    const indexNumber = JSON.stringify(index);
    setSelectedNote(item)
    console.log(indexNumber);
  }



  return (
      <Container fluid>
        <Row>
          <Sidebar />
          <NoteList notes={notes} selectedNote={selectedNote} setSelectedNote={handleClick}  />
          <Note onAdd={addNote} />
        </Row>
      </Container>
  );
}

export default App;
