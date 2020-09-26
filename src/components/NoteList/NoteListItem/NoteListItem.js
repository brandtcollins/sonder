import React from "react";
import styles from "../NoteList.module.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFinder from "../../../utils/iconFinder/iconFinder";
import timeSince from "../../../utils/timeSince/timeSince";

const ListItem = (props) => {
  const { active, id, icon, click, title, content, time } = props;
  return (
    <Col
      className={
        active ? [styles.selected, styles.noteContainer] : styles.noteContainer
      }
      onClick={click}
    >
      <Row>
        <Col onClick={click} id={id} className={styles.noteCategory} xs={2}>
          <p>
            {timeSince(time)}
            <br />
            <FontAwesomeIcon icon={iconFinder(icon)} />
          </p>
        </Col>
        <Col>
          <p onClick={click} id={id} className={styles.noteTitle}>
            {title.split("").length > 60
              ? title.substring(0, 60) + "..."
              : title}
          </p>
          <p onClick={click} id={id} className={styles.noteContent}>
            {content.split("").length > 60
              ? content.substring(0, 100) + "..."
              : content}
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default ListItem;
