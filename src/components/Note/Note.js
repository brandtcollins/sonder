import React, { useState } from "react";
import styles from "./Note.module.css"
import { Col, Row } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const editNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Edit Note</Tooltip>;
const deleteNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Delete Note</Tooltip>;

const Note = (props) => {

    const  { id, title, content } = props.notes;

    const [disabledNoteFields, setDisabledNoteFields] = useState(true);

    const handleClick = () => {
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
                            value={title}
                            onChange={props.inputChange}
                            wrap="hard"
                            rows="3"
                            disabled= {disabledNoteFields ? true : false}
                        />
                        <textarea
                            className={styles.noteBody}
                            name="content"
                            value={content}
                            onChange={props.inputChange}
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
                                    <button onClick={() => props.deleteNote(id)}><i className="fas fa-trash"></i></button>
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
