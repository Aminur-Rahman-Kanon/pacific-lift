import React, { useContext } from "react";
import styles from './sidedrawer.module.css';
import Logo from "../logo/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLayerGroup, faComments, faBook, faPaperPlane, faPhone, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ContextApi from "../contentApi/contextApi";

const Sidedrawer = () => {
    
    const context = useContext(ContextApi);

    return (
        <div className={context.sidedrawer ? `${styles.main} ${styles.open}` : styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.xBtnContainer} onClick={() => context.setSidedrawer((sidedrawer) => !sidedrawer)}>
                    <FontAwesomeIcon icon={faX} className={styles.xBtn} />
                </div>
                <div className={styles.topItem}>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.itemContainer}>
                        <a href="/" className={styles.content}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={faHouse} className={styles.iconMedium} />
                            </span>
                            <span className={styles.text}>Home</span>
                        </a>
                        <a href="/products" className={styles.content}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={faLayerGroup} className={styles.iconMedium} />
                            </span>
                            <span className={styles.text}>Products</span>
                        </a>
                        <a href="/brochure" className={styles.content}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={faBook} className={styles.iconMedium} />
                            </span>
                            <span className={styles.text}>Brochure</span>
                        </a>
                        <a href="#" className={styles.content}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={faPaperPlane} className={styles.iconMedium} />
                            </span>
                            <span className={styles.text}>Request Quote</span>
                        </a>
                        <a href="#" className={styles.content}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={faComments} className={styles.iconMedium} />
                            </span>
                            <span className={styles.text}>Contact Us</span>
                        </a>
                    </div>
                </div>
                <div className={styles.bootomItem}>
                    <div className={styles.footer}>
                        <a href="tel:008801913777565" className={styles.footerItem}>
                            <span className={styles.footerIcon}>
                                <FontAwesomeIcon icon={faPhone} className={styles.iconMedium} />
                            </span>
                            <span className={styles.textSmall}>+8801913777565</span>
                        </a>
                        <a href="mailto:info@pacificliftbd.com" className={styles.footerItem}>
                            <span className={styles.footerIcon}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.iconMedium} />
                            </span>
                            <span className={styles.textSmall}>info@pacificlift.com</span>
                        </a>
                        <div className={styles.socialItem}>
                            <a target="_blank" href="https://www.facebook.com/pacificlift/?locale=en_GB" className={styles.socialLink}>
                                <FontAwesomeIcon icon={faFacebook} className={styles.iconMedium}/>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <FontAwesomeIcon icon={faTwitter} className={styles.iconMedium}/>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <FontAwesomeIcon icon={faYoutube} className={styles.iconMedium}/>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <FontAwesomeIcon icon={faLinkedin} className={styles.iconMedium}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidedrawer;
