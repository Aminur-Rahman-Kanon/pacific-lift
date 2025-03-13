"use client"

import type React from "react"
import { useState, useContext } from "react"
import { HashLink as Link } from "react-router-hash-link"
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
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="pacific lift bd" className={styles.logoImg} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="#" className={styles.navLinkActive}>
            Home
          </Link>
          <Link to="#services" className={styles.navLink}>
            Services
          </Link>
          <Link to="#products" className={styles.navLink}>
            Products
          </Link>
          <Link to="#about" className={styles.navLink}>
            About Us
          </Link>
          <Link to="#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link to="#contact" className={styles.navLink}>
            Contact
          </Link>
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

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link to="#" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="#services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="#products" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="#projects" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link to="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <button className={styles.mobileCta}>Get a Quote</button>
          </nav>
        </div>
      )} */}
    </header>
  )
}

export default Header

