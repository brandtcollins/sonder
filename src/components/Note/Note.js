import React, { useState } from "react";
import styles from "./Note.module.css"
import { Col, Row } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

let uniqid = require('uniqid');
const editNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Edit Note</Tooltip>;
const deleteNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Delete Note</Tooltip>;
const submitNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Submit Note</Tooltip>;


const Note = (props) => {

    const [note, setNote] = useState({
        id: uniqid(),
        icon: "fa-paw",
        title: "",
        content: ""
    });

    const [disabledNoteFields, setDisabledNoteFields] = useState(true);

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
        if (disabledNoteFields) {
            setDisabledNoteFields(false)
        } else if (!disabledNoteFields) {
            setDisabledNoteFields(true)
        }
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
                            disabled= {disabledNoteFields ? true : false}
                        />
                        <textarea
                            className={styles.noteBody}
                            name="content"
                            placeholder={props.contentValue}  
                            value={note.content}
                            onChange={handleChange}
                            disabled= {disabledNoteFields ? true : false}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div className={styles.noteNav}>
                        <ul>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={editNoteTooltip} >
                                    <button onClick={handleClick}><i className="fas fa-edit" variant="success" /></button>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={deleteNoteTooltip}>
                                    <button onClick={() => props.deleteNote(props.noteID)}><i className="fas fa-trash"></i></button>
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
