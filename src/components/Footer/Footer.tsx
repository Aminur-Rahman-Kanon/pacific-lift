import type React from "react"
import { HashLink as Link } from "react-router-hash-link"
import styles from "./Footer.module.css"
import logo from '../../assets/images/logo/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.company}>
            <Link to="#" className={styles.logoLink}>
              <img src={logo} alt="pacific lift bd" className={styles.logoImg} />
            </Link>
            <p className={styles.description}>
              Elevating standards in vertical transportation with innovative solutions for all your elevator needs.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/pacificlift" target="_blank" className={styles.socialLink} aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="#" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#services" className={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="#products" className={styles.link}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="#about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#projects" className={styles.link}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="#" className={styles.link}>
                  Installation
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Maintenance
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Modernization
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Repair Services
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="#" className={styles.link}>
                  Safety Inspections
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.title}>Newsletter</h3>
            <p className={styles.description}>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className={styles.form}>
              <input type="email" className={styles.input} placeholder="Your email address" />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2023 Pacific Lift BD. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link to="#" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link to="#" className={styles.bottomLink}>
              Terms of Service
            </Link>
            <Link to="#" className={styles.bottomLink}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

