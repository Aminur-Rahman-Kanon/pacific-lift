import type React from "react"
import styles from './About.module.css';
import about from '../../assets/images/others/o1.jpg';

interface Stat {
  id: number
  value: string
  label: string
}

const stats: Stat[] = [
  {
    id: 1,
    value: "25+",
    label: "Years of Experience",
  },
  {
    id: 2,
    value: "5,000+",
    label: "Projects Completed",
  },
  {
    id: 3,
    value: "200+",
    label: "Expert Employees",
  },
  {
    id: 4,
    value: "30+",
    label: "Countries Served",
  },
]

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>About Pacific Lift BD</h2>
            <p className={styles.description}>
              With over 25 years of experience in the elevator industry, Pacific Lift BD has established itself as a leader in
              providing innovative vertical transportation solutions. Our commitment to quality, safety, and customer
              satisfaction has earned us a reputation for excellence.
            </p>
            <p className={styles.description}>
              We employ a team of highly skilled engineers, technicians, and designers who work together to deliver
              customized elevator solutions that meet the unique requirements of each project. Our state-of-the-art
              manufacturing facilities and rigorous quality control processes ensure that every elevator we install
              meets the highest standards of performance and reliability.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>Our Story</button>
              <button className={styles.secondaryButton}>Meet Our Team</button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={about} alt="Pacific Lift BD team" className={styles.image} />
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

