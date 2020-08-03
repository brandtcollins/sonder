import React from 'react';
import './NoteList.css';
import ListItem from './NoteListItem/NoteListItem';
import noteList from './NoteListFiller';
import { useState } from 'react';
import { Col } from 'react-bootstrap'


function NoteList() {

    const [selectedNote, setSelectedNote] = useState(1);

    return (
        <Col className="noteList">
            {noteList.map(item => (
                <ListItem 
                    key={item}
                    content={item.content}
                    id={item.id} 
                    title={item.title} 
                    active={item === selectedNote}
                    click={() => setSelectedNote(item)} 
                />
            ))}
        </Col>
    );
}


export default NoteList;