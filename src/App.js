import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'


function App() {
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
