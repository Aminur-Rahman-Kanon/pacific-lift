import React, { useEffect, useRef, useState } from 'react';
import styles from './animateElement1.module.css';
import door1 from '../../assets/images/others/leftDoor.png';
import door2 from '../../assets/images/others/rightDoor.png';

const AnimateElement1 = () => {

    const animate = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);

    useEffect(() => {
        const animateHandler = () => {
            if (animate.current){
                const rect = animate.current.getBoundingClientRect();
                const isVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                
                setIsVisible(isVisible);
            }
        }

        window.addEventListener('scroll', animateHandler);

        return () => {
            window.removeEventListener('scroll', animateHandler);
        }
    }, [])
    
    useEffect(() => {
        const el = document.getElementById('animate-el');
        const leftItem = el.children[0];
        const rightItem = el.children[1];
        if (isVisible && !isPlayed){
            leftItem.className = `${styles.leftItem} ${styles.initLeft}`;
            rightItem.className = `${styles.rightItem} ${styles.initRight}`;
        }
        // else {
        //     leftItem.className = styles.leftItem;
        //     rightItem.className = styles.rightItem;
        // }

        return () => {
            setIsPlayed(true);
        }
    }, [isVisible])
    
    return (
        <div className={styles.container} id='animate-el' ref={animate}>
            <div className={styles.leftItem}>
                <img src={door1} alt="pacific lift" className={styles.leftImg}/>
            </div>
            <div className={styles.rightItem}>
                <img src={door2} alt="pacific lift" className={styles.rightImg}/>
            </div>
        </div>
    )
}

export default AnimateElement1;
