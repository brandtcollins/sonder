import React from 'react';
import '../NoteList.css';
import { Col, Row } from 'react-bootstrap';

function ListItem(props){

    const title = props.title;
    const content = props.content;

    return (
        <Col className={props.active ? 'noteContainer selected' : 'noteContainer'}>
            <Row>
                <Col onClick={props.click} id={props.id} className="noteCategory " xs={2}><p>15D<br/><i className={"fas " + props.icon}></i></p></Col>
                <Col>
                    <p onClick={props.click} id={props.id} className="noteTitle ">{title.substring(0, 60) + '...'}</p>
                    <p onClick={props.click} id={props.id} className="noteContent ">{content.substring(0, 100) + '...'}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default ListItem;