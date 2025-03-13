import type React from "react"
import styles from "./Testimonials.module.css";
import p1 from '../../assets/images/others/o6.jpg';
import p2 from '../../assets/images/others/o7.jpg';
import p3 from '../../assets/images/others/o8.jpg';

interface Testimonial {
  id: number
  content: string
  author: string
  position: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "ElevateX provided exceptional service from start to finish. Their team was professional, knowledgeable, and responsive to our needs. The elevators they installed have been running flawlessly for over two years now.",
    author: "Sarah Johnson",
    position: "Facility Manager, Grand Plaza Hotel",
    avatar: p1,
  },
  {
    id: 2,
    content:
      "The modernization project ElevateX completed for our office tower exceeded our expectations. The elevators are now faster, more energy-efficient, and have significantly improved the tenant experience.",
    author: "Michael Chen",
    position: "Property Director, Skyline Tower",
    avatar: p2,
  },
  {
    id: 3,
    content:
      "We chose ElevateX for our hospital expansion project because of their expertise in healthcare facilities. Their medical elevators have been crucial for patient transport and have operated reliably even during peak hours.",
    author: "Dr. Emily Rodriguez",
    position: "Operations Director, City General Hospital",
    avatar: p3,
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.description}>
            Hear from our satisfied clients about their experience working with ElevateX.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.quoteIcon}>
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
                  <path d="M10.5 20.5 3 13l7.5-7.5" />
                  <path d="m21 20.5-7.5-7.5L21 5.5" />
                </svg>
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.name}>{testimonial.author}</p>
                  <p className={styles.position}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

