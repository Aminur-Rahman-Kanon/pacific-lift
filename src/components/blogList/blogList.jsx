import React from 'react';
import styles from './blogList.module.css';
import { blogs } from '../../data/blog';
import { Link } from 'react-router-dom';

const BlogList = () => {

    const displayBlogs = blogs ? blogs.slice(0, 4).map((blog, idx) => <Link key={idx} to={`/blog/${blog.title}`} className={styles.card}>
        <div className={styles.bgContainer}>
            <img src={blog.img} alt={blog.title} className={styles.bg} />
        </div>
        <div className={styles.details}>
            <h3 className={styles.title}>{blog.title}</h3>
            <span className={styles.date}>{blog.date}</span>
        </div>
    </Link>)
    :
    <div className={styles.default}>
        <h3 className={styles.headerMediumWhite}>nothing to display</h3>
    </div>

    return (
        <section className={styles.container}>
            <h2 className={styles.headerLargeWhite}>recent articles</h2>
            <div className={styles.list}>
                {displayBlogs}
            </div>
            <Link to='/blog' className={styles.link}>see all blogs</Link>
        </section>
    )
}

export default BlogList;
