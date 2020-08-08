import React from 'react'
import styles from './Button.module.css';

const RoundButton = (props) => {
    return <button className={styles.button} onClick={props.onClick}>{props.text}</button>
}

export default RoundButton