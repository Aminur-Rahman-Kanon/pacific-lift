import React from 'react';
import styles from './projects.module.css';
import { projects } from '../../data/data';

const Projects = () => {

    const displayProjects = projects && projects.map(prj => <div key={prj.id} className={styles.card}>
        <div className={styles.front}>
            <div className={styles.bgContainer}>
                <img src={prj.img} alt={prj.title} className={styles.bg} />
            </div>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.slider}>
                <h3 className={styles.headerMediumWhite}>{prj.title}</h3>
                <div className={styles.textGroup}>
                    <span className={styles.key}>type of lift:</span>
                    <span className={styles.value}>{prj.type}</span>
                </div>
                <div className={styles.textGroup}>
                    <span className={styles.key}>capacity:</span>
                    <span className={styles.value}>{prj.capacity}</span>
                </div>
                <div className={styles.textGroup}>
                    <span className={styles.key}>stop/opening:</span>
                    <span className={styles.value}>{prj.type}</span>
                </div>
                <div className={styles.textGroup}>
                    <span className={styles.key}>peoject location:</span>
                    <span className={styles.value}>{prj.type}</span>
                </div>
            </div>
        </div>
    </div>)
    
    return (
        <section className={styles.container}>
            <h2 className={styles.headerLargeWhite}>some of our recent projects</h2>
            <div className={styles.cardContainer}>
                {displayProjects}
            </div>
        </section>
    )
}

export default Projects