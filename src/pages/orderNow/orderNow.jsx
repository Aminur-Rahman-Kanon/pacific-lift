import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './orderNow.module.css';
import { products } from '../../data/products';
import { focusElement, leaveFocus } from '../../utilities/utilities';

const OrderNow = () => {

    const { itemId, category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!itemId) return;

    const item = products && category && products[category].filter(item => item.title === itemId);
    if (!item.length) return;

    const displayProduct = <div className={styles.bgContainer}>
        <img src={item[0].img} alt={item[0].title} className={styles.bg} />
    </div>

    return (
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
                        <input type='text' placeholder='Full Name' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(1, styles)}
                         onBlur={() => leaveFocus(1, styles)}>
                        <label className={styles.label}>email address</label>
                        <input type='text' placeholder='Email Address' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(2, styles)}
                         onBlur={() => leaveFocus(2, styles)}>
                        <label className={styles.label}>phone number</label>
                        <input type='text' placeholder='Phone Number' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(3, styles)}
                         onBlur={() => leaveFocus(3, styles)}>
                        <label className={styles.label}>company name</label>
                        <input type='text' placeholder='Company Name' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(4, styles)}
                         onBlur={() => leaveFocus(4, styles)}>
                        <label className={styles.label}>project address</label>
                        <input type='text' placeholder='Project Address' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(5, styles)}
                         onBlur={() => leaveFocus(5, styles)}>
                        <label className={styles.label}>head room height</label>
                        <input type='text' placeholder='Head Room Height' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(6, styles)}
                         onBlur={() => leaveFocus(6, styles)}>
                        <label className={styles.label}>PIT</label>
                        <input type='text' placeholder='PIT' className={styles.input}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(7, styles)}
                         onBlur={() => leaveFocus(7, styles)}>
                        <label className={styles.label}>stop/opening</label>
                        <input type='text' placeholder='Stop/Opening' className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(8, styles)}
                         onBlur={() => leaveFocus(8, styles)}>
                        <label className={styles.label}>shaft size</label>
                        <input type='text' placeholder='Shaft Size' className={styles.input} />
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(9, styles)}
                         onBlur={() => leaveFocus(9, styles)}>
                        <label className={styles.label}>capacity</label>
                        <input type='text' placeholder='Capacity' className={styles.input} />
                    </div>
                    {/* <div className={styles.inputGroup}>
                    </div> */}
                    <div className={styles.inputContainer} style={{border: 'none'}}>
                        <div className={styles.radioInput}>
                            <input type='radio' id='machine room' name='machine room' value="machine room"/>
                            <label htmlFor='machine room' className={styles.radioLabel}>machine room</label>
                        </div>
                        <div className={styles.radioInput}>
                            <input type='radio' id='machine room less' name='machine room' value="machine room less"/>
                            <label htmlFor='machine room less' className={styles.radioLabel}>machine room less</label>
                        </div>
                    </div>
                    <div className={styles.btnGroup}>
                        <button className={styles.btn}>submit</button>
                        <button className={styles.btn} onClick={(e) => {
                                e.preventDefault();
                                return navigate(-1);
                            }
                            }>go back</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default OrderNow;
