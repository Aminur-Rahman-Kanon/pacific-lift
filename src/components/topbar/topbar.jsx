import React from "react";
import styles from './topbar.module.css';
import Logo from "../logo/logo";
import Drawtoggle from "../drawtoggle/drawtoggle";
import AdditionalTopbar from "../additionalTopbar/additionalTopbar";

const Topbar = () => {
    return (
        <div className={styles.topbarMain}>
            <div className={styles.topItemContainer}>
                <AdditionalTopbar />
            </div>
            <div className={styles.bottomItemContainer}>
                <Drawtoggle />
                <Logo />
            </div>
        </div>
    )
}

export default Topbar;
