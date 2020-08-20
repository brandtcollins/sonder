import React, { useState } from 'react';
import styles from './NoteList.module.css';
import ListItem from './NoteListItem/NoteListItem';
import { Col } from 'react-bootstrap';
import RoundButton from '../Button/Button';
import quoteGenerator from '../../utils/quoteGenerator/quoteGenerator'

let uniqid = require('uniqid');

const NoteList = (props) => {

    const {notes, category} = props;

    const [newNote, setNewNote] = useState({
        id: uniqid(),
        category: category,
        icon: "fa-paw",
        title: "You clicked the create button, this is a new note.",
        content: quoteGenerator() 
    });

    //Action for the 'Create a Note', pushes new note on the list to App.js
    const submitNote = (event) => {
        props.createNote(newNote);
        //Change newNote's ID each time a new note is created
        setNewNote({
            id: uniqid(),
            category: category,
            icon: "fa-paw",
            title: "You clicked the create button, this is a new note.",
            content: quoteGenerator() 
        })
        event.preventDefault();
    }
    
    //Click event handler to change styles on list items.
    const handleClick = (item) => {
        props.setSelectedNote(item)
    }

    return (
        <Col className={styles.noteList}>
        <RoundButton onClick={submitNote}>Create a new note</RoundButton>
            {notes.filter(noteItem => noteItem.category !== "deleted").map((item, index) => (
                <ListItem 
                    title={item.title} 
                    content={item.content}
                    id={item.id}
                    key={item.id}
                    icon={item.icon}
                    active={item.id === props.selectedNote}
                    click={() => handleClick(item)}
                />
            ))}
        </Col>
    );
}

export default NoteList;