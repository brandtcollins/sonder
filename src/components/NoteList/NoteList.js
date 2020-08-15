import React, { useState } from 'react';
import styles from './NoteList.module.css';
import ListItem from './NoteListItem/NoteListItem';
import { Col } from 'react-bootstrap';
import RoundButton from '../Button/Button';

let uniqid = require('uniqid');

const NoteList = (props) => {

    const noteList = props.notes;

    const [newNote, setNewNote] = useState({
        id: uniqid(),
        icon: "fa-paw",
        title: "You clicked the create button, this is a new note.",
        content: `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`
    });

    //Action for the 'Create a Note', pushes new note on the list to App.js
    const submitNote = (event) => {
        props.createNote(newNote);
        //Change newNote's ID each time a new note is created
        setNewNote({
            ...newNote,
            id: uniqid()
        })
        event.preventDefault();
    }

    //Click event handler to change styles on list items.
    const handleClick = (item, index) => {
        props.setSelectedNote(item)
    }

    return (
        <Col className={styles.noteList}>
        <RoundButton onClick={submitNote}>Create a new note</RoundButton>
            {noteList.map((item, index) => (
                <ListItem 
                    title={item.title} 
                    content={item.content}
                    id={item.id}
                    key={item.id}
                    icon={item.icon}
                    active={item.id === props.selectedNote}
                    click={() => handleClick(item, index)}
                />
            ))}
        </Col>
    );
}

export default NoteList;