import React from 'react';
import './NoteList.css'
import { Grid } from '@material-ui/core';
import ListItem from './ListItem';
import noteList from '../../noteList';
import { useState } from 'react';

function NoteList() {

    const [selectedNote, setSelectedNote] = useState(1);

    return (
        <div className="noteList">
            <Grid container>
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
            </Grid>
        </div>
    );
}


export default NoteList;