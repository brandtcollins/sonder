import React, { useEffect, useReducer } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from '../components/NoteList/NoteList';
import Note from '../components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faHashtag, faHeart, faCode, faPaintBrush, faMusic, faHome, faPaw } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBriefcase, faHashtag, faHeart, faCode, faPaintBrush, faMusic, faHome, faPaw)

const initialState = {
  notes: [{
    id: 123,
    category: "All",
    icon: 'fa-briefcase',
    title: 'This is the first note, click to open and edit your note',
    content: 'Select a note from the list on the left and then click the edit icon on the top right.  Enter your notes and then save!'
  }],
  selectedNoteID: 123,
  foundNoteIndex: 0,
  category: 'All',
}  

const reducer = (state, action) => {
  const { payload } = action
  const { id, title, content, icon, category } = action.payload

  switch(action.type) {
    case "loadLocalStorage":
      return {
        ...state,
        notes: payload
      }
    case "createNewNote":
      return {
        ...state,
        notes: [...state.notes, {
          id: id, 
          title: title, 
          content: content,
          icon: icon,
          category: category
        }]
      };
    case "deleteNote":
      const deletedNoteIndex = state.notes.findIndex(noteItem => noteItem.id === state.selectedNoteID);
      const newNoteToDisplay = state.notes[deletedNoteIndex - 1].id;
      return {
        ...state,
        selectedNoteID: newNoteToDisplay,
        notes: state.notes.filter((noteItem) => noteItem.id !== payload)
      }
    case "selectedNote":
      return {
        ...state,
        selectedNoteID: payload
      }
    case "foundNoteIndex":
      return {
        ...state,
        foundNoteIndex: payload
      }
    case "setCategory":
      const newCategoryNote = state.notes.find( noteItem => noteItem.category === state.category)
      return {
        ...state,
        category: payload,
        selectedNoteID: newCategoryNote.id
      }
    case "noteCategoryChange":
      const updatedNotes = state.notes.map(noteItem => 
        noteItem.id === state.selectedNoteID ? {
          ...noteItem,
              category: payload
        } : noteItem)

      return {
        ...state,
        notes: updatedNotes,
      }
    case "inputChange":
      const { name, value } = payload;
      const updatedInputs = state.notes.map(noteItem => 
        noteItem.id === state.selectedNoteID ? {
          ...noteItem,
            [name]: value
        } : noteItem)
      return {
        ...state,
        notes: updatedInputs
      }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

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
  }, [state.selectedNoteID])

  const searchNotes = () => {
    dispatch({type: 'foundNoteIndex', payload: state.notes.findIndex(noteItem => noteItem.id === state.selectedNoteID)})
  }
  
  return (
      <Container fluid>
        <Row>
          <Sidebar notes={state.notes} setCategory={(categoryName) => dispatch({type: 'setCategory', payload: categoryName})} />
          <NoteList 
                createNote={(newNote)=> dispatch({ type: 'createNewNote', payload: newNote})}
                notes={state.notes}
                category={state.category}
                selectedNote={state.selectedNoteID}
                setSelectedNote={(listItem) => dispatch({type: 'selectedNote', payload: listItem.id})}
                />
          <Note 
                inputChange={(event) => dispatch({type: 'inputChange', payload: event.target})}
                categoryChange={(item) => dispatch({type: 'noteCategoryChange', payload: item})}
                deleteNote={(id) => dispatch({type: 'deleteNote', payload: id})}
                notes={state.notes[state.foundNoteIndex]}
                />
        </Row>
      </Container>
  );
}

export default App;