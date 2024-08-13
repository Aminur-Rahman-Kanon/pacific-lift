import React from 'react';
import styles from './slider.module.css';
import img1 from '../../assets/images/slider/1.png';
import img2 from '../../assets/images/slider/2.png';
import img3 from '../../assets/images/slider/3.png';
import img4 from '../../assets/images/slider/4.png';
import img5 from '../../assets/images/slider/5.png';
import img6 from '../../assets/images/slider/6.png';
import img7 from '../../assets/images/slider/7.png';
import img8 from '../../assets/images/slider/8.png';

const Slider = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.headerLargeWhite}>partners we work with</h2>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img src={img1} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img2} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img3} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img4} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img5} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img6} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img7} alt="pacific lift" className={styles.icon}/>
                </div>
                <div className={styles.item}>
                    <img src={img8} alt="pacific lift" className={styles.icon}/>
                </div>
            </div>
        </section>
    )
}

export default Slider;
