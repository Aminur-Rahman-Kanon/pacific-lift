import React from 'react';
import styles from './displayProducts.module.css';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const DisplayProducts = () => {

    const displayProducts = products && products.slice(0, 4).map(prd => <div className={styles.wrapper}>
        <div className={styles.bgContainer}>
            <img src={prd.img} alt={prd.title} className={styles.bg} />
        </div>
        <div className={styles.details}>
            <title className={styles.title}>{prd.title}</title>
            <div className={styles.textContainer}>
                <span className={styles.key}>celling</span>
                <span className={styles.value}>{prd.celling}</span>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.key}>wall</span>
                <span className={styles.value}>{prd.wall}</span>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.key}>handrail</span>
                <span className={styles.value}>{prd.handrail}</span>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.key}>floor</span>
                <span className={styles.value}>{prd.floor}</span>
            </div>
            <div className={styles.btnGroup}>
                <Link to={`/place-order/${prd.title}`} className={styles.btn}>order now</Link>
                <button className={styles.btn}>contact us</button>
            </div>
        </div>
    </div>)
    return (
        <div className={styles.container}>
            <h2 className={styles.headerLargeWhite}>some of our products</h2>
            <div className={styles.products}>
                {displayProducts}
            </div>
            <Link to={''} className={styles.link}>browse all products</Link>
        </div>
    )
}

export default DisplayProducts;
