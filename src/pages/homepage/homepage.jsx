import React from "react";
import styles from './homepage.module.css';
import Banner from "../../components/banner/banner";
import Content1 from "../../components/content1/content1";
import Content2 from "../../components/content2/content2";
import AnimateElement1 from "../../components/animateElement1/animateElement1";
import OurService from "../../components/ourService/ourService";
import Summary from "../../components/summary/summary";

const Homepage = () => {

    return (
        <div className={styles.homepageMain}>
            <Banner />
            <Content1 />
            <AnimateElement1 />
            <Content2 />
            <OurService />
            <Summary />
        </div>
    )
}

export default Homepage;
