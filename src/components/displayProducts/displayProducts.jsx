import React from 'react';
import styles from './displayProducts.module.css';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const DisplayProducts = () => {

    const displayProducts = products && products.cabin.slice(0, 4).map(prd => <div key={prd.id} className={styles.wrapper}>
        <div className={styles.bgContainer}>
            <img src={prd.img} alt={prd.title} className={styles.bg} />
        </div>
        <div className={styles.details}>
            <title className={styles.title}>{prd.title}</title>
            {
                Object.keys(prd.details).map(dtls => <div key={dtls} className={styles.textContainer}>
                    <span className={styles.key}>{dtls}</span>
                    <span className={styles.value}>{prd.details[dtls]}</span>
                </div>)
            }
            <div className={styles.textContainer}>
                <span className={styles.key}>price</span>
                <span className={styles.value}>{prd.price}</span>
            </div>
            <div className={styles.btnGroup}>
                <Link to={`/place-order/${prd.category}/${prd.title}`} className={styles.btn}>order now</Link>
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
            <Link to={'/products'} className={styles.link}>browse all products</Link>
        </div>
    )
}

export default DisplayProducts;
