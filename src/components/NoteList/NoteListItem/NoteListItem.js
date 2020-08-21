import React from 'react';
import styles from '../NoteList.module.css';
import { Col, Row } from 'react-bootstrap';

const ListItem = (props) => {

    const { title, content } = props

    return (
        <Col className={props.active ? [styles.selected, styles.noteContainer] : styles.noteContainer } onClick={props.click}>
            <Row>
                <Col onClick={props.click} id={props.id} className={styles.noteCategory} xs={2}><p>15D<br/><i className={"fas " + props.icon}></i></p></Col>
                <Col>
                    <p onClick={props.click} id={props.id} className={styles.noteTitle} >{title.split('').length > 60 ? title.substring(0, 60) + '...' : title}</p>
                    <p onClick={props.click} id={props.id} className={styles.noteContent}>{content.split('').length > 60 ? content.substring(0, 100) + '...' : content}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default ListItem;