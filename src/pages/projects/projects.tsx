"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./projects.module.css";
import o2 from '../../assets/images/others/o2.jpg';
import o3 from '../../assets/images/others/o3.jpg';
import o4 from '../../assets/images/others/o4.jpg';
import o5 from '../../assets/images/others/o5.jpg';
import o9 from '../../assets/images/others/o9.jpg';
import o10 from '../../assets/images/others/o10.jpg';
import o11 from '../../assets/images/others/o11.jpg';

interface Project {
  id: number
  title: string
  category: "residential" | "commercial" | "industrial"
  location: string
  year: string
  description: string
  features: string[]
  image: string
  gallery: string[]
  client: string
  isFeatured?: boolean
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "commercial" | "industrial">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    header: false,
    featured: false,
    projects: false,
    stats: false,
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  // Intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Tower Residential Complex",
      category: "residential",
      location: "New York, NY",
      year: "2022",
      description:
        "A luxury residential complex featuring 6 high-speed elevators serving 45 floors. The installation included custom cabin designs, smart access control, and energy recovery systems.",
      features: [
        "Smart destination dispatch system",
        "Energy-efficient regenerative drives",
        "Custom cabin interiors with premium finishes",
        "Integrated access control with resident smartphones",
        "Real-time monitoring and predictive maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Skyline Development Group",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Panorama Heights Condominiums",
      category: "residential",
      location: "Miami, FL",
      year: "2021",
      description:
        "Installation of 4 panoramic glass elevators in a beachfront condominium complex, providing residents with stunning ocean views during their vertical journey.",
      features: [
        "Panoramic glass cabins with UV protection",
        "Marine-grade components for coastal environment",
        "Whisper-quiet operation",
        "Integrated emergency power backup",
        "Custom lighting scenes for day and night operation",
      ],
      image:
        o2,
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1577593980495-6e8b4c8f9a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Coastal Properties LLC",
    },
    {
      id: 3,
      title: "Grand Central Office Tower",
      category: "commercial",
      location: "Chicago, IL",
      year: "2023",
      description:
        "A comprehensive elevator solution for a 60-story office tower, featuring 12 high-speed elevators with destination control system to optimize traffic flow during peak hours.",
      features: [
        "Advanced destination dispatch system",
        "Traffic analysis and optimization algorithms",
        "Touchless operation with mobile app integration",
        "Energy-efficient operation with sleep mode during off-hours",
        "Real-time monitoring and remote diagnostics",
      ],
      image:
        o3,
      gallery: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1554469384-e58fac937c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Midwest Commercial Properties",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Riverside Shopping Mall",
      category: "commercial",
      location: "Portland, OR",
      year: "2022",
      description:
        "Installation of 8 elevators and 12 escalators in a multi-level shopping mall, designed to handle high traffic volumes while providing a seamless shopping experience.",
      features: [
        "Glass-walled panoramic elevators",
        "Heavy-duty escalators with energy-saving features",
        "Integrated digital signage in elevator cabins",
        "Enhanced accessibility features",
        "Automated maintenance scheduling",
      ],
      image:
        o4,
      gallery: [
        "https://images.unsplash.com/photo-1581541234264-28d5fb333969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1555529771-7888783a18d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Riverside Retail Management",
    },
    {
      id: 5,
      title: "Central Hospital Medical Center",
      category: "commercial",
      location: "Boston, MA",
      year: "2021",
      description:
        "A specialized elevator system for a major hospital, featuring dedicated elevators for patients, staff, and medical supplies with advanced hygiene and safety features.",
      features: [
        "Antimicrobial surfaces and touchless controls",
        "Dedicated service elevators for medical equipment",
        "Priority override for emergency situations",
        "Bed-sized cabins with medical equipment support",
        "Integrated with hospital management systems",
      ],
      image:
        o5,
      gallery: [
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Northeast Healthcare Systems",
    },
    {
      id: 6,
      title: "Global Manufacturing Plant",
      category: "industrial",
      location: "Detroit, MI",
      year: "2023",
      description:
        "Heavy-duty freight elevators for a manufacturing facility, designed to transport heavy machinery and materials between production floors with maximum efficiency and safety.",
      features: [
        "10-ton capacity freight elevators",
        "Reinforced cabins and doors",
        "Precision floor leveling for forklift access",
        "Impact-resistant interior finishes",
        "Advanced safety features for industrial environments",
      ],
      image:
        o9,
      gallery: [
        "https://images.unsplash.com/photo-1565793298495-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "American Manufacturing Inc.",
      isFeatured: true,
    },
    {
      id: 7,
      title: "Harbor Logistics Center",
      category: "industrial",
      location: "Seattle, WA",
      year: "2022",
      description:
        "Custom cargo elevators for a shipping logistics center, facilitating the movement of containers and palletized goods between multiple loading docks and storage levels.",
      features: [
        "15-ton capacity cargo elevators",
        "Extra-wide doors for pallet jack access",
        "Ruggedized controls for industrial use",
        "Integration with warehouse management system",
        "Automated loading/unloading capabilities",
      ],
      image:
        o10,
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Pacific Northwest Logistics",
    },
    {
      id: 8,
      title: "Mountain View Residences",
      category: "residential",
      location: "Denver, CO",
      year: "2021",
      description:
        "Home elevators installed in 24 luxury mountain homes, providing accessibility while complementing the rustic architectural style with custom wood finishes.",
      features: [
        "Compact design for residential spaces",
        "Custom wood paneling and natural finishes",
        "Quiet hydraulic operation",
        "Battery backup for power outages",
        "Smart home integration",
      ],
      image:
        o11,
      gallery: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7f34b5e8d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      ],
      client: "Alpine Homes Development",
    },
  ]

  const projectStats = [
    { number: "250+", label: "Projects Completed" },
    { number: "45+", label: "Cities Served" },
    { number: "98%", label: "On-Time Completion" },
    { number: "15+", label: "Industry Awards" },
  ]

  const featuredProjects = projects.filter((project) => project.isFeatured)
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex === selectedProject.gallery.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedProject.gallery.length - 1 : prevIndex - 1))
    }
  }

  return (
    <div className={styles.container}>
      <section id="header" className={`${styles.headerSection} ${isVisible.header ? styles.visible : ""}`}>
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContent}>
          <h1>Our Successful Projects</h1>
          <p>Elevating spaces and experiences through innovative vertical transportation solutions</p>
        </div>
      </section>

      <section id="featured" className={`${styles.featuredSection} ${isVisible.featured ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>Featured Projects</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <div key={project.id} className={styles.featuredCard} onClick={() => openProjectModal(project)}>
              <div className={styles.featuredImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.featuredOverlay}>
                  <div className={styles.featuredBadge}>{project.category}</div>
                  <div className={styles.viewProject}>
                    <span>View Project</span>
                    <span className={styles.viewIcon}>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.featuredInfo}>
                <h3>{project.title}</h3>
                <p className={styles.featuredLocation}>{project.location}</p>
                <p className={styles.featuredDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className={`${styles.projectsSection} ${isVisible.projects ? styles.visible : ""}`}>
        <div className={styles.sectionHeader}>
          <h2>All Projects</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterButton} ${activeCategory === "all" ? styles.activeFilter : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${activeCategory === "residential" ? styles.activeFilter : ""}`}
            onClick={() => setActiveCategory("residential")}
          >
            Residential
          </button>
          <button
            className={`${styles.filterButton} ${activeCategory === "commercial" ? styles.activeFilter : ""}`}
            onClick={() => setActiveCategory("commercial")}
          >
            Commercial
          </button>
          <button
            className={`${styles.filterButton} ${activeCategory === "industrial" ? styles.activeFilter : ""}`}
            onClick={() => setActiveCategory("industrial")}
          >
            Industrial
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard} onClick={() => openProjectModal(project)}>
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectCategory}>{project.category}</div>
                  <div className={styles.projectYear}>{project.year}</div>
                  <div className={styles.viewDetails}>View Details</div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p className={styles.projectLocation}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stats" className={`${styles.statsSection} ${isVisible.stats ? styles.visible : ""}`}>
        <div className={styles.statsOverlay}></div>
        <div className={styles.statsContent}>
          <div className={styles.sectionHeader}>
            <h2>Project Statistics</h2>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.statsGrid}>
            {projectStats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Contact our team to discuss your elevator needs and how we can bring your vision to life.</p>
          <button className={styles.ctaButton}>
            <span>Get in Touch</span>
            <span className={styles.buttonIcon}>→</span>
          </button>
        </div>
      </section>

      {isModalOpen && selectedProject && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              ×
            </button>

            <div className={styles.modalGallery}>
              <img
                src={selectedProject.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
              />

              <button className={styles.galleryNav} onClick={prevImage} aria-label="Previous image">
                ‹
              </button>
              <button className={styles.galleryNav} onClick={nextImage} aria-label="Next image">
                ›
              </button>

              <div className={styles.galleryIndicator}>
                {selectedProject.gallery.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.galleryDot} ${index === currentImageIndex ? styles.activeDot : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            </div>

            <div className={styles.modalDetails}>
              <div className={styles.modalHeader}>
                <h2>{selectedProject.title}</h2>
                <div className={styles.projectMeta}>
                  <span className={styles.projectMetaItem}>
                    <strong>Location:</strong> {selectedProject.location}
                  </span>
                  <span className={styles.projectMetaItem}>
                    <strong>Year:</strong> {selectedProject.year}
                  </span>
                  <span className={styles.projectMetaItem}>
                    <strong>Client:</strong> {selectedProject.client}
                  </span>
                  <span className={styles.projectMetaItem}>
                    <strong>Category:</strong> {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className={styles.modalDescription}>
                <h3>Project Overview</h3>
                <p>{selectedProject.description}</p>
              </div>

              <div className={styles.modalFeatures}>
                <h3>Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className={styles.inquireButton}>
                <span>Inquire About Similar Projects</span>
                <span className={styles.buttonIcon}>→</span>
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

