import React, { useEffect, useState } from "react";
import styles from './quote.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SubmitBtn from "../../components/submitBtn/submitBtn";
import Modal from '../../components/modal/modal';

const Quote = () => {

    const [spinner, setSpinner] = useState(false);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [isBtnDisable, setIsBtnDisable] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    console.log(isBtnDisable);
    
    

    useEffect(() => {
        if (name, email, phone){
            setIsBtnDisable(false);
        }
        else {
            setIsBtnDisable(true);
        }
    }, [name, email, phone])

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        await fetch('https://pacific-lift-server.onrender.com/get-a-quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, message })
        }).then(res => res.json())
        .then(result => {
            setSpinner(false);
            if (result.status === 'success'){
                setModal(true);
                setError(false);
            }
            else {
                setModal(true);
                setError(true);
            }
        })
        .catch(err => {
            setSpinner(false);
            setModal(true);
            setError(true);
        })
    }

    const displayMsg = !error ? <div className={styles.displayMsg}>
        <h2 className={styles.headingLargeBlack}>Submitted!</h2>
        <span className={styles.headingMediumBlack}>We will get back to you soon!</span>
        <button onClick={() => window.location.reload()} className={styles.displayMsgBtn}>Ok</button>
    </div>
    :
    <div className={styles.displayMsg}>
        <h2 className={styles.headingLargeBlack}>Ooops, something went wrong!</h2>
        <span className={styles.headingMediumBlack}>Please try again</span>
        <button onClick={() => {
            setModal(false);
        }} className={styles.displayMsgBtn}>Ok</button>
    </div>

    return (
        <>
            <Modal modal={modal}>
                {displayMsg}
            </Modal>
            <div className={styles.main}>
                <div className={styles.bgMain}>

                </div>
                <div className={styles.wrapper}>
                    <div className={styles.leftItem}>
                        <h2 className={styles.headingLargeWhite}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                        <span className={styles.textMediumWhite}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem earum fuga assumenda aliquid modi inventore dolorum! Dolore, molestiae saepe unde quasi qui iusto doloribus, officiis ratione aliquid id facilis!</span>
                        <div className={styles.linkContainer}>
                            <a target="_blank" href="https://www.facebook.com/pacificlift/?locale=en_GB" className={styles.link}>
                                <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
                            </a>
                            <a href="#" className={styles.link}>
                                <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
                            </a>
                            <a href="#" className={styles.link}>
                                <FontAwesomeIcon icon={faGoogle} className={styles.icon}/>
                            </a>
                            <a href="#" className={styles.link}>
                                <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.rightItem}>
                        <div className={styles.rightItemHeader}>
                            <h3 className={styles.headingMediumWhite}>Get a quote</h3>
                            <span className={styles.textMediumWhite}>We will get back to you in 24 hours</span>
                        </div>
                        <form className={styles.formContainer}>
                            <div className={styles.inputContainer}>
                                <input type="text"
                                        placeholder="Full name"
                                        className={styles.input}
                                        onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="email"
                                        placeholder="Email address"
                                        className={styles.input}
                                        onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.inputContainer}>
                                <input type="number"
                                        placeholder="Phone number"
                                        className={styles.input}
                                        onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className={styles.textAreaContainer}>
                                <textarea placeholder="Type message here"
                                        rows={10}
                                        className={styles.textAreaInput}
                                        onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <SubmitBtn isDisable={isBtnDisable} btnText={'get quote'} spinner={spinner} clickHandler={submitHandler} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote;
