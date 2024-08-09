import React from "react";
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Drawtoggle = () => {
    return (
        <div className={styles.drawtoggleMain}>
            <FontAwesomeIcon icon={faBarsStaggered} className={styles.drawtoggle}/>
        </div>
    )
}

export default Drawtoggle;
