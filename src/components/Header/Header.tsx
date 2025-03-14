"use client"

import type React from "react"
import { useState, useContext } from "react"
import { NavLink } from 'react-router-dom';
// import { HashLink as Link } from "react-router-hash-link"
import styles from "./Header.module.css";
import logo from '../../assets/images/logo/logo.png';
import { ContextProvider, ContextType } from "../../hoc/context";

const Header: React.FC = () => {
  
  const context = useContext(ContextProvider);
  console.log(context)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="pacific lift bd" className={styles.logoImg} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Services
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            About Us
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            Contact
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button className={styles.quoteButton}>Get a Quote</button>
          <button className={styles.menuButton} onClick={context?.toggleSidedrawer} aria-label="Toggle menu">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

