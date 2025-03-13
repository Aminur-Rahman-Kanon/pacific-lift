import type React from "react"
import styles from "./CTA.module.css"

const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Elevate Your Building?</h2>
          <p className={styles.description}>
            Contact us today to discuss your elevator needs and get a customized solution for your building.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Request a Quote</button>
            <button className={styles.secondaryButton}>Schedule a Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

