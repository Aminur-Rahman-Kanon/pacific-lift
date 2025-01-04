import React from "react";
import ReactDom from 'react-dom'
import styles from './backdrop.module.css';

const Backdrop = ({ backdrop, toggle }) => {

    return ReactDom.createPortal(<div style={backdrop ? {display:'block'} : {display: 'none'}}
                                      className={styles.main}
                                      onClick={() => toggle(false)}>

    </div>, document.getElementById('backdrop'));
}

export default Backdrop;
