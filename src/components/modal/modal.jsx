import React from "react";
import styles from './modal.module.css';
import ReactDom from 'react-dom';

const Modal = ({ modal, children }) => {
    return ReactDom.createPortal(<div className={modal ? `${styles.modal} ${styles.open}` : styles.modal}>
        {children}
    </div>, document.getElementById('modal'));
}

export default Modal;
