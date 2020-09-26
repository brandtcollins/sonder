import React, { useEffect, useState } from "react";
import styles from "./NoteList.module.css";
import ListItem from "./NoteListItem/NoteListItem";
import { Col } from "react-bootstrap";
import RoundButton from "../Button/Button";
import quoteGenerator from "../../utils/quoteGenerator/quoteGenerator";
import titleGenerator from "../../utils/titleGenerator/titleGenerator";
import EmptyListItem from "./NoteListItem/EmptyListItem";

let uniqid = require("uniqid");

const NoteList = (props) => {
  const {
    notes,
    category,
    createNote,
    setSelectedNote,
    selectedNoteID,
  } = props;
  let filteredList;

  const [newNote, setNewNote] = useState({
    id: uniqid(),
    time: Date.now(),
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
      time: Date.now(),
      category: category,
      icon: "fa-paw",
      title: titleGenerator(),
      content: quoteGenerator(),
    });
  };

  useEffect(categoryChange, [category]);

  const handleClick = (item) => {
    setSelectedNote(item);
  };

  const listGenerator = () => {
    let notesByCategory = notes.filter(
      (noteItem) => noteItem.category === category
    );

    filteredList = notesByCategory;
  };

  listGenerator();
  return (
    <Col className={styles.noteList}>
      <RoundButton onClick={submitNote}>Create a new note</RoundButton>
      {filteredList.length > 0 ? (
        filteredList
          .filter((noteItem) => noteItem.category === category)
          .map((item) => (
            <ListItem
              title={item.title}
              content={item.content}
              id={item.id}
              key={item.id}
              time={item.time}
              icon={item.category}
              active={item.id === selectedNoteID}
              click={() => handleClick(item)}
            />
          ))
      ) : (
        <EmptyListItem />
      )}
    </Col>
  );
};

export default NoteList;
