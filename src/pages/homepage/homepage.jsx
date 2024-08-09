import React from "react";
import styles from './homepage.module.css';
import Banner from "../../components/banner/banner";
import Content1 from "../../components/content1/content1";
import Content2 from "../../components/content2/content2";

const Homepage = () => {

    return (
        <div className={styles.homepageMain}>
            <Banner />
            <Content1 />
            <Content2 />
        </div>
    )
}

export default Homepage;
