import React, { useState, useEffect } from "react";
import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import SubmitBtn from "../../components/submitBtn/submitBtn";
import Modal from "../../components/modal/modal";


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [phone, setPhone] = useState('');

    const [spinner, setSpinner] = useState(false);
    const [isBtnDisable, setIsBtnDisable] = useState(true);
    const [modal, setModal] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (name, email, query, phone){
            setIsBtnDisable(false)
        }
        else {
            setIsBtnDisable(true)
        }
    }, [name, email, query, phone])

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true)

        await fetch('https://pacific-lift-server.onrender.com/contact-query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, query, phone })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                setSpinner(false);
                setIsError(false);
                setModal(true);
            }
            else {
                setSpinner(false);
                setIsError(true);
                setModal(true);
            }
        })
        .catch(err => {
            setSpinner(false);
            setIsError(true);
            setModal(true);
        });
    }

    const responseMsg = !isError ? <div className={styles.msgBody}>
        <h2 className={styles.headingLargeBlack}>Query Submitted!</h2>
        <span className={styles.headingSmallBlack}>We will contact with you very soon!</span>
        <button onClick={() => window.location.reload()} className={styles.msgBtn}>Ok</button>
    </div>
    :
    <div className={styles.msgBody}>
        <h2 className={styles.headingLargeBlack}>Something Went Wrong!</h2>
        <span className={styles.headingSmallBlack}>Please try again</span>
        <button onClick={() => setModal(false)} className={styles.msgBtn}>Ok</button>
    </div>

    return (
        <>
            <Modal modal={modal}>
                {responseMsg}
            </Modal>
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
                                <input type="text"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.input} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="email"
                                    placeholder="Enter your email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.input} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="number"
                                    placeholder="Enter your phone number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={styles.input} />
                            </div>
                            <div className={styles.textAreaContainer}>
                                <textarea rows={10}
                                        placeholder="What can we do for you today"
                                        onChange={(e) => setQuery(e.target.value)}
                                        className={styles.textArea} />
                            </div>
                            <SubmitBtn spinner={spinner}
                                    clickHandler={submitHandler}
                                    btnText={'Submit Query'}
                                    isDisable={isBtnDisable}
                                    />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
