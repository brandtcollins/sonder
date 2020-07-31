import React from "react";
import "./Note.css"
import TextField from '@material-ui/core/TextField';

function Note(){
    const noteFiller = `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`
    
    return (
        <div className="Note">
            <TextField 
                className="NoteHeadline" 
                placeholder="A new note title goes here."
                
            />
            <TextField 
                id="standard-multiline-flexible"
                multiline
                placeholder={noteFiller}  
                fullWidth={true}  
                margin="normal"
            />
        </div>
    )
}

export default Note;