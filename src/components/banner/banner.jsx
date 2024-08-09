import React, { useEffect, useState } from "react";
import styles from './banner.module.css';
import banner from '../../assets/videos/banner.mp4';
import { bannerAnimatedText } from '../../utilities/utilities';

const Banner = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            bannerAnimatedText(styles, 'msg-text');
        }, 11000)
        bannerAnimatedText(styles, 'msg-text');

        // clearing interval
        return () => {
            clearInterval(interval)
        };
    }, [])
    
    return (
        <div className={styles.bannerMain}>
            <div className={styles.videoContainer}>
                <video src={banner} loop playsInline autoPlay muted className={styles.banner}>

                </video>
            </div>
            <div className={styles.bannerHeader}>
                <h3 className={styles.headingSmallOrange}>Pacific Lift</h3>
                <h4 className={styles.headingExtraSmallOrange}>lift & escalator</h4>
                <div className={styles.headingLargeWhite}>feel comfortable feel <div className={styles.msg} id="msg-text"></div></div>
                <div className={styles.subHeader}>
                    <span className={styles.headingWhiteExtraSmall}>trademark registered lift brand in bangladesh</span>
                    <span className={styles.headingWhiteExtraSmall}>trademark registered lift brand in china</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;
