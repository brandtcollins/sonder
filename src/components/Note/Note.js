import React, { useState } from "react";
import "./Note.css"
import { Col, Row } from "react-bootstrap";

function Note(props){
    const noteFiller = `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote(prevNote => {
            return({
                ...prevNote,
                [name]: value
            })
        })
    }
    
    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <Col xs={6} className="note">
            <Row>
                <Col xs={10}>
                    <div>
                        <input 
                            className="noteHeadline" 
                            name="title"
                            placeholder="A new note title goes here."
                            value={note.title}
                            onChange={handleChange}
                        />
                        <textarea
                            className="noteBody"
                            name="content"
                            placeholder={noteFiller}  
                            value={note.content}
                            onChange={handleChange}
                        />
                    </div>
                </Col>
                <Col xs={1}>
                    <div className="noteNav">
                        <ul>
                            <li><button onClick={submitNote}><i className="fas fa-check-square"></i></button></li>
                            <li><i className="fas fa-trash"></i></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Note;