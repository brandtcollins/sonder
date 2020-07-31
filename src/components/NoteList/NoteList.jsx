import React from 'react';
import './NoteList.css'
import { Grid } from '@material-ui/core';
import ListItem from './ListItem';
import noteList from '../../noteList';
import { useState } from 'react';

function NoteList() {

    const [selectedNote, setSelectedNote] = useState(1);

    const buildNoteList = (item) => {
        return <ListItem click={handleClick} key={item.key} id={item.id} title={item.title} selected={selectedNote} content={item.content}/>
    }

    const handleClick = (event) => {
        const clickedItem = event.target.id;
        console.log(`Selected: ${selectedNote}`);
        console.log(`ID: ${clickedItem}`);
        setSelectedNote(clickedItem);
    }

    return (
        <div className="noteList">
            <Grid container>
                {noteList.map(buildNoteList)}
            </Grid>
        </div>
    );
}

export default NoteList;