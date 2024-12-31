import React from 'react';
import styles from './logo.module.css';
import Logo1 from '../../assets/images/logo/test.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'} className={styles.logoMain}>
            <img src={Logo1} alt="pacific lift" className={styles.logo} />
        </Link>
    )
}

export default Logo;
