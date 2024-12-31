import React from "react";
import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    return (
        <div className={styles.main}>
            <div className={styles.mainBg}></div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.leftEl}>
                        <div className={styles.leftElContent}>
                            <div className={styles.topItem}>
                                <span className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                </span>
                                <span className={styles.header}>call us</span>
                            </div>
                            <div className={styles.bottomItem}>
                                <span className={styles.bottomText}>+8801913 777 565</span>
                                <span className={styles.bottomText}>+8801913 777 565</span>
                            </div>
                        </div>
                        <div className={styles.leftElContent}>
                            <div className={styles.topItem}>
                                <span className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faMapPin} className={styles.icon} />
                                </span>
                                <span className={styles.header}>location</span>
                            </div>
                            <div className={styles.bottomItem}>
                                <span className={styles.bottomText}>house No 1 north kutub khali high school road</span>
                            </div>
                        </div>
                        <div className={styles.leftElContent}>
                            <div className={styles.topItem}>
                                <span className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                                </span>
                                <span className={styles.header}>business hours</span>
                            </div>
                            <div className={styles.bottomItem}>
                                <span className={styles.bottomText}>sun - thursday: 10am to 8pm</span>
                                <span className={styles.bottomText}>friday & saturday: closed</span>
                            </div>
                        </div>
                    </div>
                    <form className={styles.formContainer}>
                        <h2 className={styles.headingLargeWhite}>contact us</h2>
                        <div className={styles.inputContainer}>
                            <input type="text" placeholder="Enter your name" className={styles.input} />
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="email" placeholder="Enter your email address" className={styles.input} />
                        </div>
                        <div className={styles.textAreaContainer}>
                            <textarea rows={10} placeholder="What can we do for you today" className={styles.textArea} />
                        </div>
                        <button className={styles.submitBtn}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
