import React, { useContext } from 'react';
import styles from './Sidedrawer.module.css';
import logo from '../../assets/images/logo/logo.png';
import x from '../../assets/images/others/x.png';
import { ContextProvider } from '../../hoc/context';

const Sidedrawer = ():React.JSX.Element => {

    const context = useContext(ContextProvider);

  return (
    <div className={context?.sidedrawer ? `${styles.sidedrawer} ${styles.slide}` : styles.sidedrawer}>
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <img src={logo} alt='pacific lift bd' className={styles.logoImg} />
                </div>
                <div className={styles.xBtn} onClick={context?.toggleSidedrawer}>
                    <img src={x} alt="x btn" className={styles.x} />
                </div>
            </div>
            <ul className={styles.nav}>
                <li>
                    <a href='/' className={styles.navLink}>Home</a> 
                </li>
                <li>
                    <a href='/services' className={styles.navLink}>Services</a> 
                </li>
                <li>
                    <a href='/products' className={styles.navLink}>Products</a> 
                </li>
                <li>
                    <a href='/about' className={styles.navLink}>About Us</a> 
                </li>
                <li>
                    <a href='/projects' className={styles.navLink}>Projects</a> 
                </li>
                <li>
                    <a href='/contact' className={styles.navLink}>Contact</a> 
                </li>
            </ul>
            <div className={styles.links}>
                <a href="https://www.facebook.com/pacificlift" target='_blank' className={styles.socialLink} aria-label="Facebook">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidedrawer;
