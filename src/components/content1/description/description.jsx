import React from "react";
import styles from './description.module.css';
import { content1Data } from '../../../data/data';

const Description = ({ showId }) => {

    //rendering the content data
    const displayData = content1Data && content1Data.map((itm, idx) => <div key={idx}
                                                                            className={showId === idx+1 ? `${styles.description} ${styles.active}` : styles.description}
                                                                            id={idx+1}>
        {itm.map((nesItm, nesIdx) =>  <span key={nesIdx+4}>{nesItm}</span>)}
    </div>)
    return (
        <div className={styles.descriptionWrapper}>
            {displayData}
        </div>
    )
}

export default Description;
