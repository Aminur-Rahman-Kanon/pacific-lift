import React, { useState } from "react"
import styles from "./Contact.module.css"
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [btnSpinner, setBtnSpinner] = useState<boolean>(false);

  type toastId = number | string;

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<string | number> => {
    e.preventDefault();
    setBtnSpinner(true);
  
    try {
      const response = await fetch("http://localhost:4000/contact-query", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, subject, message })
      });
  
      if (!response.ok) {
        return toast.error("Something went wrong. Please try again");
      }
  
      const data = await response.json();
      setBtnSpinner(false);
      return toast.success("Your message has been sent!");
    } catch (error) {
      setBtnSpinner(false);
      return toast.error("An error occurred!");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.description}>
              Have questions about our elevator solutions? Contact us today for a consultation or to request a quote.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
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
                    className={styles.icon}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactTitle}>Phone</h3>
                  <p className={styles.contactText}>+8801913777565</p>
                  <p className={styles.contactText}>Mon-Sun, 8am-6pm</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
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
                    className={styles.icon}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactTitle}>Email</h3>
                  <p className={styles.contactText}>info@pacificliftbd.com</p>
                  {/* <p className={styles.contactText}>support@elevatex.com</p> */}
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
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
                    className={styles.icon}
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactTitle}>Address</h3>
                  <p className={styles.contactText}>10/1 North Kutub Khali</p>
                  <p className={styles.contactText}>Jatrabari, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input id="name" className={styles.input} placeholder="Full name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input id="email" type="email" className={styles.input} placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input id="phone" type="tel" className={styles.input} placeholder="Phone number" onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input id="subject" className={styles.input} placeholder="How can we help you?" onChange={(e) => setSubject(e.target.value)}/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..." onChange={(e) => setMessage(e.target.value)}/>
              </div>
              <button className={styles.button} onClick={handleSubmit}>
                {
                  btnSpinner ? <FontAwesomeIcon icon={faSpinner} spinPulse/>
                  :
                  'Send Message'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

