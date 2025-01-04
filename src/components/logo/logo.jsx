import React from 'react';
import styles from './logo.module.css';
import Logo1 from '../../assets/images/logo/test_1.png';

const Logo = () => {
    return (
        <a href={'/'} className={styles.logoMain}>
            <img src={Logo1} alt="pacific lift" className={styles.logo} />
        </a>
    )
}

export default Logo;
