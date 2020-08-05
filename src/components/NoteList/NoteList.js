import React from 'react';
import './NoteList.css';
import ListItem from './NoteListItem/NoteListItem';
import { Col } from 'react-bootstrap';


const NoteList = (props) => {

    const noteList = props.notes;

    return (
        <Col className="noteList">
            {noteList.map((item, index) => (
                <ListItem 
                    content={item.content}
                    id={item.id}
                    key={item.id}
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