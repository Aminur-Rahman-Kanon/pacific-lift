import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftItem}>
            <h2 className={styles.headerLargeWhite}>lets build something great together!</h2>
            <div className={styles.btnGroup}>
                <Link to={''} className={styles.btn}>get started</Link>
                <Link to={''} className={styles.btn}>contact us</Link>
            </div>
        </div>
        <div className={styles.rightItem}>
            <div className={styles.address}>
                <div className={styles.content}>
                    <h3 className={styles.headerSmallWhite}>address</h3>
                    <span className={styles.textSmallWhite}>10/1 north kutub khali road</span>
                    <span className={styles.textSmallWhite}>jatrabari, dhaka</span>
                </div>
                <div className={styles.iconContainer}>
                    <a target='_blank' href='https://www.facebook.com/pacificlift/?locale=en_GB' className={styles.socialLinkContainer}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
                    </a>
                    <a href='' className={styles.socialLinkContainer}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                    </a>
                    <a href='' className={styles.socialLinkContainer}>
                        <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
                    </a>
                    <a href='' className={styles.socialLinkContainer}>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                    </a>
                </div>
            </div>
            <div className={styles.contact}>
                <h3 className={styles.headerSmallWhite}>say hello</h3>
                <a href='tel:008801913777565' className={styles.tel}>+8801913777565</a>
                <a href='mailto:info@pacificlift.net' className={styles.tel}>info@pacificlift.net</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
