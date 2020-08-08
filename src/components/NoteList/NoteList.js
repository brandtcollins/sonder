import React, { useState } from 'react';
import styles from './NoteList.module.css';
import ListItem from './NoteListItem/NoteListItem';
import { Col } from 'react-bootstrap';
import RoundButton from '../Button/Button';

let uniqid = require('uniqid');

const NoteList = (props) => {

    const noteList = props.notes;

    const [note, setNote] = useState({
        id: uniqid(),
        icon: "fa-paw",
        title: "You clicked the create button, this is a new note.",
        content: `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`
    });

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            id: uniqid(),
            icon: "fa-paw",
            title: "You clicked the create button, this is a new note.",
            content: `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`
        });
        event.preventDefault();
    }


    return (
        <Col className={styles.noteList}>
        <RoundButton text="Create a new note" onClick={submitNote} />
            {noteList.reverse().map((item, index) => (
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