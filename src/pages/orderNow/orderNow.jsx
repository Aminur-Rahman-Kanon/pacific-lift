import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './orderNow.module.css';
import { products } from '../../data/products';
import { focusElement, leaveFocus } from '../../utilities/utilities';
import SubmitBtn from '../../components/submitBtn/submitBtn';
import Modal from '../../components/modal/modal';

const OrderNow = () => {

    const { itemId, category } = useParams();
    const navigate = useNavigate();

    const [isCabin, setIsCabin] = useState(false);
    const [isBtnDisable, setIsBtnDisable] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [modal, setModal] = useState(false);
    const [isError, setIsError] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [stop, setStop] = useState('');
    const [shaft, setShaft] = useState('');
    const [capacity, setCapacity] = useState('');
    const [headRoomHeight, setHeadRoomHeight] = useState('');
    const [pit, setPit] = useState('');
    const [machineRoom, setMachineRoom] = useState('');

    useEffect(() => {
        if (category && category === 'cabin'){
            setIsCabin(true);
        }
        else {
            setIsCabin(false);
        }

        window.scrollTo(0, 0);
    }, [category]);

    useEffect(() => {
        if (name, address, email, phone){
            setIsBtnDisable(false);
        }
        else {
            setIsBtnDisable(true)
        }
    }, [name, email, phone, address])

    if (!itemId) return;

    const item = products && category && products[category].filter(item => item.title === itemId);
    if (!item.length) return;

    const displayProduct = <div className={styles.bgContainer}>
        <img src={item[0].img} alt={item[0].title} className={styles.bg} />
    </div>

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        await fetch('https://pacific-lift-server.onrender.com/product-query', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                category, name, email, phone, company, address, stop, shaft, capacity, headRoomHeight, pit, machineRoom
            })
        }).then(res => res.json())
        .then(result => {
            setSpinner(false);
            if (result.status === 'success'){
                setIsError(false);
                setModal(true);
            }
            else {
                setIsError(true);
                setModal(true);
            }
        })
        .catch(err => {
            setSpinner(true);
            setIsError(true);
            setModal(true);
        });
    }

    const displayMsg = !isError ? <div className={styles.msgContainer}>
        <h2 className={styles.headingLargeBlack}>Query submitted!</h2>
        <span className={styles.textSmallBlack}>We will get back to you very soon</span>
        <button className={styles.msgBtn} onClick={() => window.location.reload()}>Ok</button>
    </div>
    :
    <div className={styles.msgContainer}>
        <h2 className={styles.headingLargeBlack}>Ooops something went wrong!</h2>
        <span className={styles.textSmallBlack}>Please try again</span>
        <button className={styles.msgBtn} onClick={() => setModal(false)}>Ok</button>
    </div>
    

    return (
        <>
            <Modal modal={modal}>
                {displayMsg}
            </Modal>
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.leftItem}>
                        {displayProduct}
                    </div>
                    <form className={styles.form}>
                        <title className={styles.title}>{item[0].title}</title>
                        <div className={styles.inputContainer}
                            onFocus={() => focusElement(0, styles)}
                            onBlur={() => leaveFocus(0, styles)}>
                            <label className={styles.label}>full name</label>
                            <input type='text'
                                    placeholder='Full Name'
                                    className={styles.input}
                                    onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className={styles.inputContainer}
                            onFocus={() => focusElement(1, styles)}
                            onBlur={() => leaveFocus(1, styles)}>
                            <label className={styles.label}>email address</label>
                            <input type='text'
                                    placeholder='Email Address'
                                    className={styles.input}
                                    onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={styles.inputContainer}
                            onFocus={() => focusElement(2, styles)}
                            onBlur={() => leaveFocus(2, styles)}>
                            <label className={styles.label}>phone number</label>
                            <input type='text'
                                    placeholder='Phone Number'
                                    className={styles.input}
                                    onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className={styles.inputContainer}
                            onFocus={() => focusElement(3, styles)}
                            onBlur={() => leaveFocus(3, styles)}>
                            <label className={styles.label}>company name</label>
                            <input type='text'
                                    placeholder='Company Name'
                                    className={styles.input}
                                    onChange={(e) => setCompany(e.target.value)}/>
                        </div>
                        <div className={styles.inputContainer}
                            onFocus={() => focusElement(4, styles)}
                            onBlur={() => leaveFocus(4, styles)}>
                            <label className={styles.label}>project address</label>
                            <input type='text'
                                    placeholder='Project Address'
                                    className={styles.input}
                                    onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div style={isCabin ? {display: 'flex'} : {display: 'none'}} className={styles.inputGroup}>
                            <div className={styles.inputContainer}
                                onFocus={() => focusElement(7, styles)}
                                onBlur={() => leaveFocus(7, styles)}>
                                <label className={styles.label}>stop/opening</label>
                                <input type='text'
                                        placeholder='Stop/Opening'
                                        className={styles.input}
                                        onChange={(e) => setStop(e.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}
                                onFocus={() => focusElement(8, styles)}
                                onBlur={() => leaveFocus(8, styles)}>
                                <label className={styles.label}>shaft size</label>
                                <input type='text'
                                        placeholder='Shaft Size'
                                        className={styles.input}
                                        onChange={(e) => setShaft(e.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}
                                onFocus={() => focusElement(9, styles)}
                                onBlur={() => leaveFocus(9, styles)}>
                                <label className={styles.label}>capacity</label>
                                <input type='text'
                                        placeholder='Capacity'
                                        className={styles.input}
                                        onChange={(e) => setCapacity(e.target.value)}/>
                            </div>
                        </div>
                        <div style={isCabin ? {display: 'flex'} : {display: 'none'}} className={styles.inputGroup}>
                            <div className={styles.inputContainer}
                                onFocus={() => focusElement(5, styles)}
                                onBlur={() => leaveFocus(5, styles)}>
                                <label className={styles.label}>head room height</label>
                                <input type='text'
                                        placeholder='Head Room Height'
                                        className={styles.input}
                                        onChange={(e) => setHeadRoomHeight(e.target.value)}/>
                            </div>
                            <div className={styles.inputContainer}
                                onFocus={() => focusElement(6, styles)}
                                onBlur={() => leaveFocus(6, styles)}>
                                <label className={styles.label}>PIT</label>
                                <input type='text'
                                        placeholder='PIT'
                                        className={styles.input}
                                        onChange={(e) => setPit(e.target.value)}/>
                            </div>
                        </div>
                        <div style={isCabin ? {display: 'flex', border: 'none'} : {display: 'none'}} className={styles.inputContainer}>
                            <div className={styles.radioInput}>
                                <input type='radio' id='machine room' name='machine room' value="machine room" onChange={(e) => setMachineRoom(e.target.value)}/>
                                <label htmlFor='machine room' className={styles.radioLabel}>machine room</label>
                            </div>
                            <div className={styles.radioInput}>
                                <input type='radio' id='machine room less' name='machine room' value="machine room less" onChange={(e) => setMachineRoom(e.target.value)}/>
                                <label htmlFor='machine room less' className={styles.radioLabel}>machine room less</label>
                            </div>
                        </div>
                        <div className={styles.btnGroup}>
                            <div className={styles.btns}>
                                <SubmitBtn btnText={'Submit'} spinner={spinner} isDisable={isBtnDisable} clickHandler={submitHandler}/>
                            </div>
                            <div className={styles.btns}>
                                <button className={styles.btn} onClick={(e) => {
                                        e.preventDefault();
                                        return navigate(-1);
                                    }
                                    }>go back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OrderNow;
