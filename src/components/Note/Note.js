import React, { useState } from "react";
import styles from "./Note.module.css"
import { Col, Row } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

let uniqid = require('uniqid');

const Note = (props) => {
    const noteFiller = `Shores of the cosmic ocean radio telescope bits of moving fluff cosmic fugue Sea of Tranquility billions upon billions. Two ghostly white figures in coveralls and helmets are softly dancing invent the universe as a patch of light trillion tingling of the spine network of wormholes? With pretty stories for which there's little good evidence emerged into consciousness two ghostly white figures in coveralls and helmets are softly dancing a still more glorious dawn awaits hundreds of thousands are creatures of the cosmos.`

    const [note, setNote] = useState({
        id: uniqid(),
        icon: "fa-paw",
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
            id: uniqid(),
            icon: "fa-paw",
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const submitNoteTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Submit Note
        </Tooltip>
      );

    const deleteNoteTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Delete Note
      </Tooltip>
    );
      

    return (
        <Col xs={6} className={[styles.note, styles.col]}>
            <Row>
                <Col xs={10}>
                    <div>
                        <textarea 
                            className={styles.noteHeadline} 
                            name="title"
                            placeholder="A new note title goes here."
                            value={note.title}
                            onChange={handleChange}
                            wrap="hard"
                            rows="3"
                        />
                        <textarea
                            className={styles.noteBody}
                            name="content"
                            placeholder={noteFiller}  
                            value={note.content}
                            onChange={handleChange}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div className={styles.noteNav}>
                        <ul>
                            <li><OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={submitNoteTooltip} >
                                    <button onClick={submitNote}><i className="fas fa-check-square" variant="success" /></button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={deleteNoteTooltip} >
                                    <i className="fas fa-trash"></i>
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Note;