import React from "react";
import styles from './additionalTopbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const AdditionalTopbar = () => {
    return (
        <div className={styles.additionalTopMain}>
            <a href="tel:00880191377565" className={styles.leftItemContainer}>
                <FontAwesomeIcon icon={faPhone} className={styles.leftItemIcon}/>
                <span className={styles.leftItem}>+8801913777565</span>
            </a>
            <div className={styles.rightItemContainer}>
                <Link to={'/brochure'} className={styles.rightItem}>Free brochure</Link>
                <Link to={''} className={styles.rightItem}>Request quote</Link>
                <Link to={'/contact'} className={styles.rightItem}>Contact us</Link>
            </div>
        </div>
    )
}

export default AdditionalTopbar;
