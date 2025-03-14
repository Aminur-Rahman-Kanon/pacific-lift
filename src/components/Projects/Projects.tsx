import type React from "react"
import styles from "./Projects.module.css";
import p1 from '../../assets/images/others/o2.jpg';
import p2 from '../../assets/images/others/o3.jpg';
import p3 from '../../assets/images/others/o4.jpg';
import p4 from '../../assets/images/others/o5.jpg';
import { Link } from "react-router-dom";

interface Project {
  id: number
  image: string
  category: string
  title: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    image: p1,
    category: "Hospitality",
    title: "Grand Plaza Hotel",
    description: "Installation of 12 high-speed elevators with custom glass cabins and smart control systems.",
  },
  {
    id: 2,
    image: p2,
    category: "Commercial",
    title: "Skyline Tower",
    description: "Modernization of 20 elevators in a 50-story office building, improving efficiency by 40%.",
  },
  {
    id: 3,
    image: p3,
    category: "Healthcare",
    title: "City General Hospital",
    description: "Installation of specialized medical elevators with enhanced hygiene features and bed capacity.",
  },
  {
    id: 4,
    image: p4,
    category: "Residential",
    title: "Riverside Residences",
    description: "Installation of 8 energy-efficient elevators in a luxury residential complex.",
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore some of our most impressive elevator installations across various sectors.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link to="/projects" key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.category}>{project.category}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

