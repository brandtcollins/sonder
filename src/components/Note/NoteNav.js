import React, { useState } from "react";
import { Col, OverlayTrigger, Popover } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let _ = require("lodash");

const NoteNav = (props) => {
  const {
    disabledNoteFields,
    setDisabledNoteFields,
    category,
    id,
    deleteNote,
    categoryChange,
  } = props;

  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
    categoryChange(_.startCase(_.toLower(value)));
    document.body.click();
  };

  const handleDelete = () => {
    deleteNote(id);
    document.body.click();
  };

  const handleClick = (event) => {
    disabledNoteFields
      ? setDisabledNoteFields(false)
      : setDisabledNoteFields(true);
  };

  const editNoteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {disabledNoteFields ? "Edit Note" : "Save Note"}
    </Tooltip>
  );
  const editCategory = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Category
    </Tooltip>
  );
  const deleteNoteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Note
    </Tooltip>
  );

  const categoryPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Enter Note Category</Popover.Title>
      <Popover.Content>
        <form onSubmit={handleSubmit}>
          <input
            maxLength="12"
            className={styles.categoryInput}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            placeholder={`Current category: ${category}`}
            value={value}
          ></input>
        </form>
      </Popover.Content>
    </Popover>
  );

  const deleteNotePopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Are you sure you want to delete?</Popover.Title>
      <Popover.Content>
        <button className={styles.button} onClick={() => handleDelete(id)}>
          Yes, delete this note.
        </button>
      </Popover.Content>
    </Popover>
  );
  return (
    <Col xs={1} className={styles.noteNav}>
      <ul>
        <li>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={editNoteTooltip}
          >
            <button onClick={handleClick}>
              <FontAwesomeIcon
                className={disabledNoteFields ? styles.inactive : styles.active}
                icon={disabledNoteFields ? "edit" : "save"}
              />
            </button>
          </OverlayTrigger>
        </li>
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="left"
          overlay={categoryPopover}
        >
          <li>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={editCategory}
            >
              <button variant="success">
                <FontAwesomeIcon icon="tag" />
              </button>
            </OverlayTrigger>
          </li>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="left"
          overlay={deleteNotePopover}
        >
          <li>
            <OverlayTrigger
              rootCloseEvent="click"
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={deleteNoteTooltip}
            >
              <button>
                <FontAwesomeIcon icon="trash" />
              </button>
            </OverlayTrigger>
          </li>
        </OverlayTrigger>
      </ul>
    </Col>
  );
};

export default NoteNav;
