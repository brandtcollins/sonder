import React from 'react';
import './NoteList.css';
import ListItem from './NoteListItem/NoteListItem';
import { Col } from 'react-bootstrap';


function NoteList(props) {

    const noteList = props.notes;

    return (
        <Col className="noteList">
            {noteList.map((item, index) => (
                <ListItem 
                    key={index}
                    content={item.content}
                    id={index} 
                    icon={item.icon}
                    title={item.title} 
                    active={item === props.selectedNote}
                    click={() => props.setSelectedNote(item, index)} 
                />
            ))}
        </Col>
    );
}


export default NoteList;