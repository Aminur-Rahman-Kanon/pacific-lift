"use client"

import { useState, useEffect } from "react"
import styles from "./aboutUs.module.css";

interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  image: string
}

// interface Testimonial {
//   id: number
//   quote: string
//   author: string
//   company: string
//   image: string
// }

// interface OfficeLocation {
//   id: number
//   city: string
//   address: string
//   phone: string
//   email: string
//   image: string
// }

export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    story: false,
    mission: false,
    achievements: false,
    team: false,
    testimonials: false,
    locations: false,
  })

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  // Auto-rotate testimonials
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  //   }, 8000)
  //   return () => clearInterval(interval)
  // }, [])

  // Intersection observer for animations
  // useEffect(() => {
  //   const observerOptions = {
  //     threshold: 0.2,
  //     rootMargin: "0px 0px -100px 0px",
  //   }

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible((prev) => ({
  //           ...prev,
  //           [entry.target.id]: true,
  //         }))
  //       }
  //     })
  //   }, observerOptions)

  //   const sections = document.querySelectorAll("section[id]")
  //   console.log(sections)
  //   sections.forEach((section) => {
  //     observer.observe(section)
  //   })

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section)
  //     })
  //   }
  // }, [])

  const companyHistory = {
    founded: "1985",
    story:
      "Founded over 35 years ago, Pacific Lift BD Systems began as a small family business dedicated to providing reliable elevator solutions. What started as a modest repair service has grown into a leading provider of comprehensive elevator products and services across the country. Through decades of innovation and unwavering commitment to quality, we've built a reputation for excellence in the vertical transportation industry.",
    mission:
      "Our mission is to elevate safety, accessibility, and efficiency in vertical transportation through innovative solutions, exceptional service, and unwavering commitment to our customers.",
    values: [
      {
        title: "Safety First",
        description:
          "We prioritize safety in every aspect of our business, from product design to installation and maintenance.",
        icon: "🛡️",
      },
      {
        title: "Customer Excellence",
        description:
          "We are dedicated to exceeding customer expectations through responsive service and tailored solutions.",
        icon: "🌟",
      },
      {
        title: "Innovation",
        description:
          "We continuously seek new technologies and methods to improve elevator performance and efficiency.",
        icon: "💡",
      },
      {
        title: "Integrity",
        description: "We conduct business with honesty, transparency, and ethical practices in all our relationships.",
        icon: "🤝",
      },
    ],
  }

  const achievements = [
    { number: "5,000+", label: "Installations", icon: "🏢" },
    { number: "10,000+", label: "Maintenance Contracts", icon: "🔧" },
    { number: "35+", label: "Years of Experience", icon: "📅" },
    { number: "98%", label: "Customer Satisfaction", icon: "😊" },
  ]

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Robert Elevate",
      position: "Founder & CEO",
      bio: "With over 40 years in the industry, Robert founded Pacific Lift BD Systems with a vision to transform vertical transportation through innovation and exceptional service.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Operations Officer",
      bio: "Sarah oversees all operational aspects of the company, ensuring that our installation and service teams deliver excellence on every project.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael leads our R&D department, developing cutting-edge elevator technologies that set new standards for efficiency and safety.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      position: "Customer Service Director",
      bio: "Elena ensures that every customer interaction exceeds expectations, from initial consultation to ongoing support.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  // const testimonials: Testimonial[] = [
  //   {
  //     id: 1,
  //     quote:
  //       "Pacific Lift BD Systems transformed our outdated elevators into modern, efficient transportation systems. Their team was professional, knowledgeable, and completed the project ahead of schedule.",
  //     author: "James Wilson",
  //     company: "Skyline Properties",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     id: 2,
  //     quote:
  //       "The maintenance program from Pacific Lift BD Systems has significantly reduced our elevator downtime. Their technicians are prompt, thorough, and always go the extra mile to ensure our systems are running optimally.",
  //     author: "Maria Garcia",
  //     company: "Central Hospital",
  //     image:
  //       "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     id: 3,
  //     quote:
  //       "We've partnered with Pacific Lift BD Systems for all our new construction projects. Their expertise in elevator design and installation is unmatched, and they consistently deliver quality results on time and within budget.",
  //     author: "David Thompson",
  //     company: "Thompson Construction Group",
  //     image:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  // ]

  // const officeLocations: OfficeLocation[] = [
  //   {
  //     id: 1,
  //     city: "New York",
  //     address: "123 Broadway, New York, NY 10001",
  //     phone: "(212) 555-1234",
  //     email: "newyork@elevatelift.com",
  //     image:
  //       "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     id: 2,
  //     city: "Chicago",
  //     address: "456 Michigan Ave, Chicago, IL 60601",
  //     phone: "(312) 555-5678",
  //     email: "chicago@elevatelift.com",
  //     image:
  //       "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     id: 3,
  //     city: "Los Angeles",
  //     address: "789 Wilshire Blvd, Los Angeles, CA 90017",
  //     phone: "(213) 555-9012",
  //     email: "losangeles@elevatelift.com",
  //     image:
  //       "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   },
  // ]

  return (
    <div className={styles.container}>
      {/* <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Pacific Lift BD</h1>
          <p className={styles.heroSubtitle}>Elevating standards in vertical transportation since 1985</p>
          <div className={styles.scrollIndicator}>
            <span>Scroll Down</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
      </div> */}

      <section id="story" className={`${styles.storySection} ${isVisible.story ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Our Story</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <p>{companyHistory.story}</p>
            <div className={styles.foundedBadge}>
              <span>Est. {companyHistory.founded}</span>
            </div>
          </div>
          <div className={styles.storyImage}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Company History"
            />
          </div>
        </div>
      </section>

      <section id="mission" className={`${styles.missionSection} ${isVisible.mission ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Our Mission</h2>
          <div className={styles.underline}></div>
        </div>

        <p className={styles.missionStatement}>{companyHistory.mission}</p>

        <div className={styles.valuesGrid}>
          {companyHistory.values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="achievements"
        className={`${styles.achievementsSection} ${isVisible.achievements ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2>Our Achievements</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.achievementIcon}>{achievement.icon}</div>
              <div className={styles.achievementNumber}>{achievement.number}</div>
              <div className={styles.achievementLabel}>{achievement.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className={`${styles.teamSection} ${isVisible.team ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Leadership Team</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.teamMemberImage}>
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
                <div className={styles.teamMemberOverlay}>
                  <div className={styles.teamMemberSocial}>
                    <a href="#" aria-label="LinkedIn">
                      <span className={styles.socialIcon}>in</span>
                    </a>
                    <a href="#" aria-label="Email">
                      <span className={styles.socialIcon}>✉</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.teamMemberInfo}>
                <h3>{member.name}</h3>
                <div className={styles.position}>{member.position}</div>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section
        id="testimonials"
        className={`${styles.testimonialsSection} ${isVisible.testimonials ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2>What Our Clients Say</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.testimonialSlider}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialSlide} ${index === activeTestimonial ? styles.activeSlide : ""}`}
            >
              <div className={styles.testimonialQuote}>
                <div className={styles.quoteMarks}>"</div>
                <p>{testimonial.quote}</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} />
                <div>
                  <h3>{testimonial.author}</h3>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.testimonialControls}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.testimonialDot} ${index === activeTestimonial ? styles.activeDot : ""}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section id="locations" className={`${styles.locationsSection} ${isVisible.locations ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Our Offices</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.locationsGrid}>
          {officeLocations.map((location) => (
            <div key={location.id} className={styles.locationCard}>
              <div className={styles.locationImage}>
                <img src={location.image || "/placeholder.svg"} alt={location.city} />
                <div className={styles.locationOverlay}>
                  <h3>{location.city}</h3>
                </div>
              </div>
              <div className={styles.locationInfo}>
                <p className={styles.address}>{location.address}</p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <span>{location.phone}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <span>{location.email}</span>
                  </div>
                </div>
                <button className={styles.directionButton}>
                  <span>Get Directions</span>
                  <span className={styles.buttonIcon}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className={styles.contactSection}>
        <div className={styles.contactOverlay}></div>
        <div className={styles.contactContent}>
          <h2>Get in Touch</h2>
          <p>Have questions about our products or services? Our team is ready to assist you.</p>
          <div className={styles.contactButtons}>
            <button className={styles.primaryButton}>
              <span>Contact Us</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button className={styles.secondaryButton}>
              <span>Request a Quote</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

