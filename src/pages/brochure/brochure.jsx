import React, { useEffect, useState } from 'react';
import styles from './brochure.module.css';
import bg1 from '../../assets/images/brochure/brochure_bg_1.jpg';
import bg3 from '../../assets/images/brochure/brochure_bg_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGear, faWrench, faCity, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Modal from '../../components/modal/modal';

const Brochure = () => {

    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        Aos.init({ duration: '1500', once: true })
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        await fetch('https://pacific-lift-server.onrender.com/brochure')
        .then(res => res.blob())
        .then(data => {
            setSpinner(false);
            if (data){
                const zipURL = window.URL.createObjectURL(data);
                const tempLink = document.createElement('a');
                tempLink.href = zipURL;
                tempLink.setAttribute('download', 'pacific_lift_ltd.pdf');
                tempLink.click();
            }
            else {
                setError(true);
                setModal(true);
            }
        })
        .catch(err => {
            setSpinner(false);
            setModal(true);
            setError(true);
        });
    }

    const errorMsg = <div className={styles.msg} style={error ? {display: 'flex'} : {display: 'none'}}>
        <h2 className={styles.headingLargeBlack}>Something went wrong!</h2>
        <span className={styles.headingSmallBlack}>Please try again</span>
        <button onClick={() => {
            setModal(false);
        }} className={styles.msgBtn}>Ok</button>
    </div>

    return (
        <>
            <Modal modal={modal}>
                {errorMsg}
            </Modal>
            <div className={styles.main}>
                <div className={styles.firstEl}>
                    <div className={styles.priLayer}>
                        <div className={styles.innerLayer1}></div>
                        <div className={styles.innerLayer2}>
                            <img src={bg1} alt="pacific lift" className={styles.bg1}/>
                        </div>
                    </div>
                    <div className={styles.outerLayer}>
                        <div className={styles.outInnerLayer}>
                            <span className={styles.orangeDot}></span>
                            <h2 className={styles.headingLargeBlack}>we work with you from design to construction</h2>
                        </div>
                    </div>
                </div>
                
                <div className={styles.secondEl}>
                    <div className={styles.secInnerLayer}>
                        <div className={styles.firstColumn}>
                            <div data-aos= "fade-right" data-aos-delay= "250" className={styles.element}>
                                <div className={styles.imgLayer}>
                                    <FontAwesomeIcon icon={faBuilding} className={styles.img} />
                                </div>
                                <span className={styles.headingSmallBlack}>design</span>
                                <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem necessitatibus, veritatis magnam magni perspiciatis quidem nulla delectus hic expedita reprehenderit.</span>
                                <Link to={'#'} className={styles.link}>learn more</Link>
                            </div>
                            <div data-aos= "fade-right" data-aos-delay= "500" className={styles.element}>
                                <div className={styles.imgLayer}>
                                    <FontAwesomeIcon icon={faGear} className={styles.img} />
                                </div>
                                <span className={styles.headingSmallBlack}>development</span>
                                <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem necessitatibus, veritatis magnam magni perspiciatis quidem nulla delectus hic expedita reprehenderit.</span>
                                <Link to={'#'} className={styles.link}>learn more</Link>
                            </div>
                        </div>
                        <div className={styles.secondColumn}>
                            <div data-aos= "fade-left" data-aos-delay= "750" className={styles.element}>
                                <div className={styles.imgLayer}>
                                    <FontAwesomeIcon icon={faWrench} className={styles.img} />
                                </div>
                                <span className={styles.headingSmallBlack}>engineering</span>
                                <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem necessitatibus, veritatis magnam magni perspiciatis quidem nulla delectus hic expedita reprehenderit.</span>
                                <Link to={'#'} className={styles.link}>learn more</Link>
                            </div>
                            <div data-aos= "fade-left" data-aos-delay= "1000" className={styles.element}>
                                <div className={styles.imgLayer}>
                                    <FontAwesomeIcon icon={faCity} className={styles.img} />
                                </div>
                                <span className={styles.headingSmallBlack}>infrastructure</span>
                                <span className={styles.textSmallBlack}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem necessitatibus, veritatis magnam magni perspiciatis quidem nulla delectus hic expedita reprehenderit.</span>
                                <Link to={'#'} className={styles.link}>learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.firstEl}>
                    <div className={styles.priLayer}>
                        <div className={styles.innerLayer1Left}></div>
                        <div className={styles.innerLayer2}>
                            <img src={bg3} alt="pacific lift" className={styles.bg1}/>
                        </div>
                    </div>
                    <div className={styles.outerLayerRight}>
                        <div className={styles.outInnerLayer}>
                            <h2 className={styles.headingLargeBlack}>with over 30 years of experience</h2>
                            <span className={styles.textExtraSmallBlack}>want to find out more? please download our brochure.</span>
                            <button className={styles.downloadBtn} onClick={submitHandler}>
                                {
                                    spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner} />
                                    :
                                    <span>download brochure</span>
                                }
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.fourthEl}>
                    <div className={styles.innerPart1}>
                        <div data-aos= 'fade-right' className={styles.textBox}>
                            <span className={styles.text}>general contractor</span>
                        </div>
                        <div data-aos= 'fade-right' data-aos-delay="250" className={styles.textBox}>
                            <span className={styles.text}>design build/design assist</span>
                        </div>
                        <div data-aos= 'fade-right' data-aos-delay="500" className={styles.textBox}>
                            <span className={styles.text}>whole site inspection</span>
                        </div>
                        <div data-aos= 'fade-right' data-aos-delay="750" className={styles.textBox}>
                            <span className={styles.text}>pre contraction services</span>
                        </div>
                    </div>
                    <div className={styles.innerPart2}>
                        <h2 style={{color: 'white'}} className={styles.headingExLargeBlack}>our services</h2>
                        <span style={{textAlign: 'left', color: 'white'}} className={styles.textSmallBlack}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam libero praesentium expedita laudantium voluptatem rerum, voluptas velit tempora id? Nulla doloremque itaque consectetur distinctio beatae cumque illum, animi in dolorum.</span>
                        <Link to={'#'} className={styles.linkBtn}>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brochure;
