import React, { useContext } from "react";
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import ContextApi from "../contentApi/contextApi";

const Drawtoggle = () => {

    const context = useContext(ContextApi);

    return (
        <div className={styles.drawtoggleMain} onClick={() => context.setSidedrawer((sidedrawer) => !sidedrawer)}>
            <FontAwesomeIcon icon={faBarsStaggered} className={styles.drawtoggle}/>
        </div>
    )
}

export default Drawtoggle;
