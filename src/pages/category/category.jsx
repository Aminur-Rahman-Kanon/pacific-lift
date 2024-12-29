import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import Rating from '../../components/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    const path = window.location.pathname.split('/').at(-1) || '/';

    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (path && products){
            const product = products[path];
            setProduct(product);
        }

        window.scrollTo(0, 0);
    }, [path])

    const displayNav = Object.keys(products).map((prd, idx) => <Link key={idx} to={`/product/${prd}`} className={styles.navItem}>{prd}</Link>)

    const displayProduct = product && product.map(prd => <div className={styles.card}>
        <div className={styles.bgContainer}>
            <img src={prd.img} alt={prd.title || 'pacific lift'} className={styles.bg} />
        </div>
        <div className={styles.details}>
            <title className={styles.title}>{prd.title}</title>
            <Rating amount={3} />
            <span className={styles.price}>{prd.price}</span>
            <Link to={`/place-order/${path}/${prd.title}`} className={styles.btn}>order now</Link>
        </div>
    </div>)

    return (
        <div className={styles.main}>
            <a href={'/'} className={styles.navbar}>
                <div className={styles.navIconContainer}>
                    <FontAwesomeIcon icon={faHome} className={styles.navIcon}/>
                </div>
                <span className={styles.navText}>Back to Home</span>
            </a>
            <section className={styles.container}>
                <div className={styles.routeContainer}>
                    <span className={styles.route}>{`products / ${path}`}</span>
                </div>
                <div className={styles.nav}>
                    <h3 className={styles.headerSmallWhite}>products</h3>
                    <div className={styles.wrapper1}>
                        {displayNav}
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.wrapper2}>
                    <span className={styles.result}>{`showing ${product.length || 0} results`}</span>
                    <div className={styles.productWrapper}>
                        {displayProduct}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category;
