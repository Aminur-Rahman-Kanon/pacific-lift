import React, { useContext } from 'react';
import ContextApi from '../contentApi/contextApi';
import styles from './navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup, faCircleInfo, faHelmetSafety, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const context = useContext(ContextApi);

    const path = context.path;

    return (
        <div className={styles.conatiner}>
            <div className={styles.wrapper}>setPath
                <div className={path === 'homeRef' || context.elIntersecting === 'homeRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.setPath('homeRef')}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon}/>
                    <span className={styles.text}>home</span>
                </div>
                <div className={path === 'productsRef' || context.elIntersecting === 'productsRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.setPath('productsRef')}>
                    <FontAwesomeIcon icon={faLayerGroup} className={styles.icon}/>
                    <span className={styles.text}>products</span>
                </div>
                <div className={path === 'serviceRef' || context.elIntersecting === 'serviceRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.setPath('serviceRef')}>
                    <FontAwesomeIcon icon={faHelmetSafety} className={styles.icon}/>
                    <span className={styles.text}>services</span>
                </div>
                {/* <div className={path === 'summaryRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.scrollIntoView('summaryRef')}>
                    <FontAwesomeIcon icon={faCertificate} className={styles.icon}/>
                    <span className={styles.text}>summary</span>
                </div> */}
                <div className={path === 'blogRef' || context.elIntersecting === 'blogRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.setPath('blogRef')}>
                    <FontAwesomeIcon icon={faBookOpen} className={styles.icon}/>
                    <span className={styles.text}>blogs</span>
                </div>
                <div className={path === 'aboutRef' || context.elIntersecting === 'aboutRef' ? `${styles.item} ${styles.active}` : styles.item}
                     onClick={() => context.setPath('aboutRef')}>
                    <FontAwesomeIcon icon={faCircleInfo} className={styles.icon}/>
                    <span className={styles.text}>about</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
