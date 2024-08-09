import React, { useState } from "react";
import styles from './content1.module.css';
import Description from "./description/description";
import img1 from '../../assets/images/content1/content1_1.jpg';
import img2 from '../../assets/images/content1/content1_2.jpg';

const Content1 = () => {

    const [showDescriptionId, setShowDescription] = useState(1);
    
    return (
        <section className={styles.container}>
            <div className={styles.leftItem}>
                <img src={img1} alt='pacific lift' className={styles.leftItemImg1}/>
                <div className={styles.img2Container}>
                    <img src={img2} alt='pacific lift' className={styles.leftItemImg2}/>
                </div>
            </div>
            <div className={styles.rightItem}>
                <h4 className={styles.headerWhiteExtraSmall}>Renovation Company</h4>
                <h2 className={styles.headerWhiteLarge}>Our thoughts for developing your stylish life Level.</h2>
                <div className={styles.description}>
                    <div className={styles.navBtnContainer}>
                        <span className={showDescriptionId === 1 ? `${styles.navBtn} ${styles.active}` : styles.navBtn} onClick={() => setShowDescription(1)}>skills</span>
                        <span className={showDescriptionId === 2 ? `${styles.navBtn} ${styles.active}` : styles.navBtn} onClick={() => setShowDescription(2)}>experience</span>
                        <span className={showDescriptionId === 3 ? `${styles.navBtn} ${styles.active}` : styles.navBtn} onClick={() => setShowDescription(3)}>destination</span>
                    </div>
                    <div className={styles.detailsContainer}>
                        <Description   showId={showDescriptionId} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content1;
