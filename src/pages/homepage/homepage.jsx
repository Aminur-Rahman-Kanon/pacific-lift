import React, { useContext } from "react";
import ContextApi from "../../components/contentApi/contextApi";
import styles from './homepage.module.css';
import Banner from "../../components/banner/banner";
import Content1 from "../../components/content1/content1";
import Content2 from "../../components/content2/content2";
import AnimateElement1 from "../../components/animateElement1/animateElement1";
import OurService from "../../components/ourService/ourService";
import Summary from "../../components/summary/summary";
import Projects from "../../components/projects/projects";
import DisplayProducts from "../../components/displayProducts/displayProducts";
import Slider from "../../components/slider/slider";
import BlogList from "../../components/blogList/blogList";

const Homepage = () => {

    const context = useContext(ContextApi);

    return (
        <div className={styles.homepageMain}>
            <div className={styles.item} ref={context.refs.homeRef}>
                <Banner />
            </div>
            <div className={styles.item} ref={context.refs.aboutRef}>
                <Content1 />
            </div>
            <div className={styles.item}>
                <AnimateElement1 />
            </div>
            <div className={styles.item}>
                <Content2 />
            </div>
            <div className={styles.item} ref={context.refs.productsRef}>
                <DisplayProducts />
            </div>
            <div className={styles.item} ref={context.refs.serviceRef}>
                <OurService />
            </div>
            <div className={styles.item}>
                <Summary />
            </div>
            <div className={styles.item} ref={context.refs.projectsRef}>
                <Projects />
            </div>
            <div className={styles.item}>
                <Slider />
            </div>
            <div className={styles.item} ref={context.refs.blogRef}>
                <BlogList />
            </div>
        </div>
    )
}

export default Homepage;
