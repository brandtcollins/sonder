import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../NoteList.module.css";

const ListItem = () => {
  return (
    <Col>
      <Row className={styles.emptyListItem}>
        <h3>Note list empty!</h3>
        <p>
          Add a new note by clicking above or use the sidebar to change the
          category
        </p>
      </Row>
    </Col>
  );
};

export default ListItem;
