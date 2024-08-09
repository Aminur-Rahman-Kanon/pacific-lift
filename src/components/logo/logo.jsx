import React from 'react';
import styles from './logo.module.css';
import Logo1 from '../../assets/images/logo/test.png';

const Logo = () => {
    return (
        <div className={styles.logoMain}>
            <img src={Logo1} alt="pacific lift" className={styles.logo} />
        </div>
    )
}

export default Logo;
