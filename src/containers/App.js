import React, { useState, useEffect, useReducer } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from '../components/NoteList/NoteList';
import Note from '../components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const initialState = {
  notes: [{
    id: 123,
    category: "All",
    icon: 'fa-brifcase',
    title: 'This is the first note, click to open and edit your note',
    content: 'Select a note from the list on the left and then click the edit icon on the top right.  Enter your notes and then save!'
  }],
  selectedNoteID: 123,
  foundNote: 123,
  category: 'All'
}  

const reducer = (state, action) => {
  const { payload } = action
  const { id, title, content, icon } = action.payload

  switch(action.type) {
    case "createNewNote":
      return {
        ...state,
        notes: [...state.notes, {
          id: id, 
          title: title, 
          content: content,
          icon: icon
        }]
      };
      case "deleteNote":
        return {
          ...state, 
          notes: payload
        }
    case "selectedNoteItem":
      return {
        ...state,
        selectedNoteID: payload
      }
    case "foundNoteItem":
      return {
        ...state,
        foundNote: payload
      }
    case "loadLocalStorage":
      return {
        ...state,
        notes: payload
      }
    default:
      return state
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [notes, setNotes] = useState([
    {
      id: 123,
      category: "All",
      icon: "fa-briefcase",
      title: "This is the first note, click to open and edit your note",
      content: "Select a note from the list on the left and then click the edit icon on the top right.  Enter you notes and then save!"
    }
  ]);

  const [category, setCategory] = useState("All")

  //Load notes from Localstorage
  useEffect(() => {
    const data = localStorage.getItem('notes')
    if (data) {
      dispatch({type: 'loadLocalStorage', payload: JSON.parse(data)})
    }
  }, [])

  //Save notes to localstorage as well as search note for Note.js to display
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes))
  });

  //Search notes each state refresh
  useEffect(() => {
    searchNotes();
    console.log(`State updated, search notes ran`);
  }, [state.selectedNoteID])

  const deleteNote = (id) => {
    //Find the next note's index to display once current note is deleted.
    const deletedNoteIndex = state.notes.findIndex(noteItem => noteItem.id === id);
    const newIndexToDisplay = deletedNoteIndex - 1;

    const deleteSingleNote = state.notes.filter((noteItem) => noteItem.id !== id)

    dispatch({type: 'selectedNoteItem', payload: state.notes[newIndexToDisplay].id})
    dispatch({type: 'deleteNote', payload: deleteSingleNote})
  }

  const searchNotes = () => {
    dispatch({type: 'foundNoteItem', payload: state.notes.find(noteItem => noteItem.id === state.selectedNoteID)})
  }

  const handleNoteChange = (event) => {
    const { name, value } = event.target;
    setNotes(
      notes.map(noteItem => 
        noteItem.id === state.selectedNoteID ? {
          ...noteItem,
              [name]: value
        } : noteItem)
    )
  }

  const handleCategoryChange = (item) => {
    setNotes(
      notes.map(noteItem => 
        noteItem.id === state.selectedNoteID ? {
          ...noteItem,
              category: item
        } : noteItem)
    )
  }

  const changeCategory = (categoryName) => {
    setCategory(categoryName)
  }
  
  return (
      <Container fluid>
        <Row>
          <Sidebar changeCategory={changeCategory} />
          <NoteList 
                createNote={(newNote)=> dispatch({ type: 'createNewNote', payload: newNote})}
                notes={state.notes}
                category={category}
                selectedNote={state.selectedNoteID}
                setSelectedNote={(listItem) => dispatch({type: 'selectedNoteItem', payload: listItem.id})}
                />
          <Note 
                inputChange={handleNoteChange}
                categoryChange={handleCategoryChange}
                deleteNote={deleteNote}
                notes={state.foundNote}
                />
        </Row>
      </Container>
  );
}

export default App;
