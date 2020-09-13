import React, { useEffect, useState } from "react";
import styles from "./NoteList.module.css";
import ListItem from "./NoteListItem/NoteListItem";
import { Col } from "react-bootstrap";
import RoundButton from "../Button/Button";
import quoteGenerator from "../../utils/quoteGenerator/quoteGenerator";
import titleGenerator from "../../utils/titleGenerator/titleGenerator";

let uniqid = require("uniqid");

const NoteList = (props) => {
  const { notes, category, createNote, setSelectedNote } = props;

  const [newNote, setNewNote] = useState({
    id: uniqid(),
    category: category,
    icon: "fa-paw",
    title: titleGenerator(),
    content: quoteGenerator(),
  });

  const submitNote = (event) => {
    createNote(newNote);
    categoryChange();
    event.preventDefault();
  };

  const categoryChange = () => {
    setNewNote({
      id: uniqid(),
      category: category,
      icon: "fa-paw",
      title: titleGenerator(),
      content: quoteGenerator(),
    });
    console.log(`Submit note category is: ${category}`);
  };

  useEffect(categoryChange, [category]);

  const handleClick = (item) => {
    setSelectedNote(item);
  };

  return (
    <Col className={styles.noteList}>
      <RoundButton onClick={submitNote}>Create a new note</RoundButton>
      {notes
        .filter(
          props.category === "All"
            ? (noteItem) => noteItem.category !== "Deleted"
            : (noteItem) => noteItem.category === props.category
        )
        .map((item, index) => (
          <ListItem
            title={item.title}
            content={item.content}
            id={item.id}
            key={item.id}
            icon={item.category}
            active={item.id === props.selectedNote}
            click={() => handleClick(item)}
          />
        ))}
    </Col>
  );
};

export default NoteList;
