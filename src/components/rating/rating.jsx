import React from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({amount}) => {

    if (!amount) return;

    const inActiveStar = 5 - amount;
    let displayStar = [];
    let index = 0;

    if (inActiveStar) {
        for (let i=0; i<amount; i++){
            displayStar.push(<FontAwesomeIcon key={index++} icon={faStar} className={`${styles.star} ${styles.active}`}/>)
        }
        for (let i=0; i<inActiveStar; i++){
            displayStar.push(<FontAwesomeIcon key={index++} icon={faStar} className={styles.star}/>)
        }
    }
    else {
        for (let i=0; i<amount; i++){
            displayStar.push(<FontAwesomeIcon key={index++} icon={faStar} className={`${styles.star} ${styles.active}`}/>)
        }
    }
    return (
        <div className={styles.wrapper}>
            {displayStar}
        </div>
    )
}

export default Rating;
