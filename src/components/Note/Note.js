import React, { useState } from "react";
import styles from "./Note.module.css"
import { Col, Row, OverlayTrigger, Popover } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'


const Note = (props) => {

    const [disabledNoteFields, setDisabledNoteFields] = useState(true);
    const [value, setValue] = useState('')

    const  { id, title, content } = props.notes;

    const handleClick = (event) => {
        if (disabledNoteFields) {
            setDisabledNoteFields(false);
        } else if (!disabledNoteFields) {
            setDisabledNoteFields(true);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.categoryChange(value)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const editNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Edit Note</Tooltip>;
    const editCategory = (props) => <Tooltip id="button-tooltip" {...props}>Edit Category</Tooltip>;
    const deleteNoteTooltip = (props) => <Tooltip id="button-tooltip" {...props}>Delete Note</Tooltip>;

    const categoryPopover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Enter Note Category</Popover.Title>
          <Popover.Content>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Type a category" value={value}></input>
            </form> 
          </Popover.Content>
        </Popover>
    );
    
    const deleteNotePopover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Are you sure you want to delete?</Popover.Title>
        <Popover.Content>
          <button onClick={() => props.deleteNote(id)} >Yes></button> 
        </Popover.Content>
      </Popover>
    );
      
    return (
        <Col xs={6}>
            <Row>
                <Col xs={11}>
                    <div className={styles.Note}>
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
                <Col xs={1}>
                    <div className={styles.noteNav}>
                        <ul>
                            <li>
                                <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={editNoteTooltip} >
                                    <button onClick={handleClick}><i className="fas fa-edit" variant="success" alt="edit"/></button>
                                </OverlayTrigger>
                            </li>
                            <OverlayTrigger trigger="click" placement="left" overlay={categoryPopover}>
                                <li>
                                    <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={editCategory}>
                                        <button variant="success"><i class="fas fa-tag"></i></button>
                                    </OverlayTrigger>
                                </li>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="left" overlay={deleteNotePopover}>
                                <li>
                                    <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={deleteNoteTooltip}>
                                        <button><i className="fas fa-trash"></i></button>
                                    </OverlayTrigger>
                                </li>
                            </OverlayTrigger>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Note;