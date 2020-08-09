import React, { useState } from "react";
import styles from "./Note.module.css"
import { Col, Row } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

let uniqid = require('uniqid');
const submitNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Edit Note</Tooltip>;
const deleteNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Delete Note</Tooltip>;

const Note = (props) => {

    const [note, setNote] = useState({
        id: uniqid(),
        icon: "fa-paw",
        title: "",
        content: ""
    });

    const [disabledField, setDisabledField] = useState(true);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote(prevNote => {
            return({
                ...prevNote,
                [name]: value
            })
        })
    }

    const handleClick = (event) => {
        if (disabledField) {
            setDisabledField(false)
            console.log(disabledField);
        } else if (!disabledField) {
            setDisabledField(true)
            submitEdit(event)
            console.log(disabledField);
        }
    }
    
    const submitEdit = (event) => {
        props.onAdd(note);
        setNote({
            id: uniqid(),
            icon: "fa-paw",
            title: note.title,
            content: note.content
        });
        event.preventDefault();
    }
      
    return (
        <Col xs={6} className={[styles.note, styles.col]}>
            <Row>
                <Col xs={10}>
                    <div>
                        <textarea 
                            className={styles.noteHeadline} 
                            name="title"
                            placeholder={props.titleValue}
                            value={note.title}
                            onChange={handleChange}
                            wrap="hard"
                            rows="3"
                            disabled= {disabledField ? true : false}
                        />
                        <textarea
                            className={styles.noteBody}
                            name="content"
                            placeholder={props.contentValue}  
                            value={note.content}
                            onChange={handleChange}
                            disabled= {disabledField ? true : false}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div className={styles.noteNav}>
                        <ul>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={submitNoteTooltip}>
                                    <button onClick={handleClick}><i className="fas fa-edit" variant="success" /></button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={deleteNoteTooltip}>
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