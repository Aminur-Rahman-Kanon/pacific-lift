import React, { useEffect, useRef, useState } from 'react';
import styles from './ourService.module.css';
import { services } from '../../data/data';

const OurService = () => {
    const displayServices = services && services.map(svc => <div key={svc.id} className={styles.card}>
        <div className={styles.cardBgContainer}>
            <img src={svc.img} alt={svc.title} className={styles.cardBg} />
            <div className={styles.textContainer}>
                <span className={styles.textSmallWhite}>{svc.text}</span>
            </div>
        </div>
        <div className={styles.cardHeading}>
            <h3 className={styles.headerSmallOrange}>{svc.title}</h3>
        </div>
    </div>)

    return (
        <section className={styles.container}>
            <h2 className={styles.headerWhiteLarge}>our services</h2>
            <div className={styles.cardContainer} id="card-container">
                {displayServices}
            </div>
        </section>
    )
}

export default OurService;
