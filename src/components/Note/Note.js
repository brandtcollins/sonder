import React, { useState } from "react";
import styles from "./Note.module.css";
import { Col, Row } from "react-bootstrap";
import NoteNav from "./NoteNav";

const Note = (props) => {
  const { id, title, content, category } = props.notes;
  const { inputChange, deleteNote, categoryChange } = props;

  const [disabledNoteFields, setDisabledNoteFields] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submit sent`);
  };

  return (
    <Col xs={6}>
      <Row>
        <Col xs={11}>
          <form className={styles.Note} name="note" onSubmit={handleSubmit}>
            <textarea
              className={styles.noteHeadline}
              name="title"
              value={title}
              onChange={inputChange}
              wrap="hard"
              rows="3"
              disabled={disabledNoteFields ? true : false}
            />
            <textarea
              className={styles.noteBody}
              name="content"
              value={content}
              onChange={inputChange}
              disabled={disabledNoteFields ? true : false}
            />
          </form>
        </Col>
        <NoteNav
          category={category}
          categoryChange={categoryChange}
          id={id}
          disabledNoteFields={disabledNoteFields}
          setDisabledNoteFields={setDisabledNoteFields}
          deleteNote={deleteNote}
        />
      </Row>
    </Col>
  );
};

export default Note;
