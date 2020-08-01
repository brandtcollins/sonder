import React from 'react';
import "./NoteList.css"

function ListItem(props){

    const title = props.title;
    const content = props.content;

    return (
        <div className={props.active ? 'noteContainer selected' : 'noteContainer'}>
            <div onClick={props.click} id={props.id} className="noteCategory "><p>15D<br/><i className="fas fa-paw"></i></p></div>
            <div onClick={props.click} id={props.id} className="noteTitle ">{title.substring(0, 60) + '...'}</div>
            <div onClick={props.click} id={props.id} className="noteContent ">{content.substring(0, 100) + '...'}</div>
        </div>
    )
}

export default ListItem;