import React from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({amount}) => {

    if (!amount) return;

    const active = 5 - amount;
    let displayStar = [];

    if (active) {
        for (let i=0; i<active; i++){
            displayStar.push(<FontAwesomeIcon icon={faStar} className={`${styles.star} ${styles.active}`}/>)
        }
        displayStar.push(<FontAwesomeIcon icon={faStar} className={styles.star} />)
    }
    else {
        displayStar.push(<FontAwesomeIcon icon={faStar} className={`${styles.star} ${styles.active}`}/>)
    }
    return (
        <div className={styles.wrapper}>
            {displayStar}
        </div>
    )
}

export default Rating;
