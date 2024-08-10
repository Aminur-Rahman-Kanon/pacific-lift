import React, { useEffect, useRef, useState } from 'react';
import styles from './summary.module.css';
import completed from '../../assets/images/summary/completed.png';
import ongoing from '../../assets/images/summary/ongoing.png';
import worker from '../../assets/images/summary/worker.png';

const Summary = () => {

    const summaryRef = useRef(null);

    const [completedProjects, setCompletedProjects] = useState(0);
    const [ongoingProjects, setOngoingProjects] = useState(0);
    const [workers, setWorkers] = useState(0);

    const [timeoutId, setTimeoutId] = useState([]);

    const [isVisible, setIsVisible] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);

    const handler = (incremetns) => {
        let timeoutId;
        return new Promise(resolve => {
            timeoutId = setTimeout(() => {
                incremetns(inc => inc+1);
                resolve(timeoutId);
            }, 80);
        })
    }

    const test = (target) => {
        return new Promise(async (resolve, reject) => {
            const ids = [];
            try {
                for (let i=0; i<target.length; i++){
                    await handler(target.cb).then(t => ids.push(t));
                }
                resolve(ids);
            } catch (error) {
                reject('failed')
            }
        })
    }



    useEffect(() => {
        const handleScroll = () => {
            if (summaryRef.current){
                const rect = summaryRef.current.getBoundingClientRect();
                const isElVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                setIsVisible(isElVisible);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    useEffect(() => {
        if (isVisible && !isPlayed){
            const data = [{length: 70, cb:setCompletedProjects}, {length:50, cb:setOngoingProjects}, {length:30, cb:setWorkers}]
            data.forEach(async obj => {
                await test(obj).then(ids => ids.forEach(tim => setTimeoutId(timeoutId => [...timeoutId, tim])));
            })
        }
    
        return () => {
            setIsPlayed(true);
            timeoutId.forEach(id => {
                clearTimeout(id);
            });
        }

    }, [isVisible])

    return (
        <section className={styles.container}>
            <title className={styles.title} ref={summaryRef}>latest projects</title>
            <h2 className={styles.headerLargeOrange}>EXCELLENCE DRIVEN FOR GETTING UNRIVALED RESULTS.</h2>
            <div className={styles.overview}>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={completed} className={styles.icon}/>
                    </div>
                    <div className={styles.header}>
                        <div className={styles.number}>
                            <span className={styles.amount}>{completedProjects}</span>
                            <span className={styles.plus}>+</span>
                        </div>
                        <h3 className={styles.headerSmallWhite}>completed projects</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={ongoing} className={styles.icon}/>
                    </div>
                    <div className={styles.header}>
                        <div className={styles.number}>
                            <span className={styles.amount}>{ongoingProjects}</span>
                            <span className={styles.plus}>+</span>
                        </div>
                        <h3 className={styles.headerSmallWhite}>ongoing projects</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconContainer}>
                        <img src={worker} className={styles.icon}/>
                    </div>
                    <div className={styles.header}>
                        <div className={styles.number}>
                            <span className={styles.amount}>{workers}</span>
                            <span className={styles.plus}>+</span>
                        </div>
                        <h3 className={styles.headerSmallWhite}>team members</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary;
