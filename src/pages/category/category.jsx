import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import Rating from '../../components/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    const [product, setProduct] = useState([]);
    const [params, setParams] = useState('cabin');
    console.log(params);
        

    useEffect(() => {
        if (params && products){
            const product = products[params];
            setProduct(product);
        }

        window.scrollTo(0, 0);
    }, [params])

    const displayNav = Object.keys(products).map((prd, idx) => <div key={idx} onClick={() => setParams(prd)} className={params === prd ? `${styles.navItem} ${styles.navActive}` : styles.navItem}>{prd}</div>)

    const displayProduct = product && product.map(prd => <div key={prd.id} className={styles.card}>
        <div className={styles.bgContainer}>
            <img src={prd.img} alt={prd.title || 'pacific lift'} className={styles.bg} />
        </div>
        <div className={styles.details}>
            <title className={styles.title}>{prd.title}</title>
            <Rating amount={prd.rating} />
            <span className={styles.price}>{prd.price}</span>
            <Link to={`/place-order/${params}/${prd.title}`} className={styles.btn}>order now</Link>
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
                    <span className={styles.route}>{`products / ${params}`}</span>
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
