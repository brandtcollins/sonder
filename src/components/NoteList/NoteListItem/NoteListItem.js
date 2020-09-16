import React from "react";
import styles from "../NoteList.module.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconFinder from "../../../utils/iconFinder/iconFinder";
import moment from "moment";

const ListItem = (props) => {
  const { active, id, icon, click, title, content, time } = props;

  const today = moment().from(time);

  console.log(today);

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
            Just
            <br />
            Now
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
