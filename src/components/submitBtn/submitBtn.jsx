import React from "react";
import styles from './submitBtn.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SubmitBtn = ({ spinner, clickHandler, btnText, isDisable }) => {
    return (
        <button disabled={isDisable} className={styles.wrapper} onClick={clickHandler}>
            {
                spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner} />
                          :
                          <span className={styles.text}>{btnText}</span>
            }
        </button>
    )
}

export default SubmitBtn;
