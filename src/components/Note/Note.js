import React, { useContext, useState } from "react";
import styles from "./Note.module.css";
import { Col, Row } from "react-bootstrap";
import NoteNav from "./NoteNav";
import { NoteContext } from "../../context/NoteContext";

const Note = () => {
  const { state, dispatch } = useContext(NoteContext);
  const { id, title, content, category } =
    state.selectedNoteID === 5555
      ? state.blankNote
      : state.notes[state.foundNoteIndex];
  const [disabledNoteFields, setDisabledNoteFields] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submit sent`);
  };

  const onChangeHandler = (event) => {
    dispatch({ type: "inputChange", payload: event.target });
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
              onChange={onChangeHandler}
              wrap="hard"
              rows="3"
              disabled={disabledNoteFields ? true : false}
            />
            <textarea
              className={styles.noteBody}
              name="content"
              value={content}
              onChange={onChangeHandler}
              disabled={disabledNoteFields ? true : false}
            />
          </form>
        </Col>
        <NoteNav
          category={category}
          id={id}
          disabledNoteFields={disabledNoteFields}
          setDisabledNoteFields={setDisabledNoteFields}
        />
      </Row>
    </Col>
  );
};

export default Note;
