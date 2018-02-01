import React from 'react'
import styles from './LogButton.css'

export const LogButton = (props) => {
    return <img className={styles.button} src="https://avatars1.githubusercontent.com/u/8961934?s=200&v=4" onClick={props.onClick} />
}