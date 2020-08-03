import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Container, Col, Row} from 'react-bootstrap'
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'


function App() {
  return (
      <Container fluid>
        <Row>
          <Col xs="2">
            <Sidebar />
          </Col>
          <Col>
            <NoteList />
          </Col>
          <Col>
            <Note />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
