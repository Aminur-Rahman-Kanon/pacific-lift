import React from 'react';
import styles from './animateEl2.module.css';
import img1 from '../../assets/images/others/leftDoor.png';
import img2 from '../../assets/images/others/rightDoor.png';

const AnimateEl2 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftMain}>
                <div className={styles.leftItem}>
                    <img src={img1} className={styles.img} />
                </div>
            </div>
            <div className={styles.rightMain}>
                <div className={styles.rightItem}>
                    <img src={img2} className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default AnimateEl2