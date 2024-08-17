import React, { useEffect, useRef, useState } from "react";
import styles from './content2.module.css';
import bg from '../../assets/images/content2/bg3.png';
import ceo from '../../assets/images/logo/test1.png';

const Content2 = () => {

    const ceoRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [played, setPlayed] = useState(false);
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (ceoRef.current) {
    //             const rect = ceoRef.current.getBoundingClientRect();
    //             const isVisible = (
    //             rect.top >= 0 &&
    //             rect.left >= 0 &&
    //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //             );
    //             setIsVisible(isVisible);
    //         }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [])
    
    useEffect(() => {
        if (isVisible && !played){
            const ceo = document.getElementById('ceo');
            ceo.className = `${styles.ceoContainer} ${styles.init}`;
        
            ceo.addEventListener('animationend', () => {
                ceo.className = `${styles.ceoContainer} ${styles.init} ${styles.loop}`;
            })
        }

        return() => {
            setPlayed(true);
        }
    }, [isVisible]);

    return (
        <section className={styles.container} ref={ceoRef}>
            <div className={styles.leftItem}>
                <span className={styles.textWhiteSmall}>
                1st Trademark™ Registered® Lift Brand in Bangladesh
                1st Trademark™ Registered® Bangladeshi Lift Brand in China
                Our products and solutions allow us to install lifts of any size, configuration, speed and load for every section of industry. Working closely with all stakeholders, architects, principal designers and end user, pacific lift Limited can provide our clients with full turnkey projects, or small bespoke single private sector works. Our installation teams work to the highest levels of safety and quality alongside our very experienced Project Managers. pacific lift is our own brand that’s why its quality different then others. We invite you to be proud owner of our lift at your prestigious project.</span>
                <span className={styles.signature}>- Md Azizur Rahman, CEO</span>
            </div>
            <div className={styles.rightItem}>
                <div className={styles.ceoContainer}>
                    <img src={ceo} alt="pacific lift ceo" className={styles.ceo} />
                </div>
            </div>
        </section>
    )
}

export default Content2;
