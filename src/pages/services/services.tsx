"use client"

import { useState, useEffect } from "react"
import styles from "./services.module.css";
import i1 from '../../assets/images/services/i1.jpg';
import i2 from '../../assets/images/services/i2.jpg';
import m1 from '../../assets/images/services/m1.jpg';
import m2 from '../../assets/images/services/m2.jpg';
import u1 from '../../assets/images/services/u1.jpg';
import u2 from '../../assets/images/services/u2.jpg';
import s1 from '../../assets/images/services/s1.jpg';
import s2 from '../../assets/images/services/s2.jpg';



interface ServiceFeature {
  icon: string
  title: string
  description: string
}

interface ElevatorService {
  id: number
  title: string
  description: string
  image: string
  features: ServiceFeature[]
}

export default function ElevatorServices() {
  const [activeTab, setActiveTab] = useState<"installation" | "maintenance" | "repair" | "modernization">(
    "installation",
  )

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  const services: Record<string, ElevatorService[]> = {
    installation: [
      {
        id: 1,
        title: "New Construction Installation",
        description:
          "Complete elevator installation services for new buildings, from planning to final inspection and certification.",
        image:
          i1,
        features: [
          {
            icon: "📋",
            title: "Comprehensive Planning",
            description:
              "Detailed site assessment and custom installation planning to meet your building's specific requirements.",
          },
          {
            icon: "🔧",
            title: "Expert Installation",
            description: "Professional installation by certified technicians with years of experience in the field.",
          },
          {
            icon: "✅",
            title: "Safety Certification",
            description:
              "Complete safety testing and certification to ensure compliance with all regulations and standards.",
          },
        ],
      },
      {
        id: 2,
        title: "Residential Elevator Installation",
        description:
          "Specialized installation services for home elevators, designed to blend seamlessly with your residential space.",
        image:
          i2,
        features: [
          {
            icon: "🏠",
            title: "Home Integration",
            description: "Custom solutions that integrate perfectly with your home's architecture and design.",
          },
          {
            icon: "🔌",
            title: "Minimal Disruption",
            description: "Installation process designed to minimize disruption to your daily life.",
          },
          {
            icon: "🛠️",
            title: "Complete Setup",
            description: "Full setup including electrical work, shaft construction, and final finishing touches.",
          },
        ],
      },
    ],
    maintenance: [
      {
        id: 3,
        title: "Preventive Maintenance Programs",
        description:
          "Regular maintenance services to keep your elevator systems running smoothly and prevent costly breakdowns.",
        image:
          s1,
        features: [
          {
            icon: "🔍",
            title: "Regular Inspections",
            description: "Scheduled inspections to identify and address potential issues before they become problems.",
          },
          {
            icon: "🔄",
            title: "Component Replacement",
            description: "Timely replacement of worn parts to maintain optimal performance and safety.",
          },
          {
            icon: "📊",
            title: "Performance Monitoring",
            description: "Continuous monitoring of elevator performance metrics to ensure optimal operation.",
          },
        ],
      },
      {
        id: 4,
        title: "Annual Safety Audits",
        description:
          "Comprehensive safety audits to ensure your elevator systems meet all current safety standards and regulations.",
        image:
          s2,
        features: [
          {
            icon: "🛡️",
            title: "Safety Compliance",
            description: "Thorough evaluation of all safety features and compliance with current regulations.",
          },
          {
            icon: "📝",
            title: "Detailed Reporting",
            description: "Comprehensive reports documenting the condition of your elevator systems.",
          },
          {
            icon: "📈",
            title: "Improvement Recommendations",
            description: "Expert recommendations for safety and performance improvements.",
          },
        ],
      },
    ],
    repair: [
      {
        id: 5,
        title: "Emergency Repair Services",
        description: "24/7 emergency repair services to quickly address elevator malfunctions and minimize downtime.",
        image:
          i1,
        features: [
          {
            icon: "⏱️",
            title: "Rapid Response",
            description: "Quick response times to minimize elevator downtime and inconvenience.",
          },
          {
            icon: "🔨",
            title: "On-the-spot Repairs",
            description: "Immediate repairs for common issues to restore service as quickly as possible.",
          },
          {
            icon: "📞",
            title: "24/7 Availability",
            description: "Round-the-clock service availability for emergency situations.",
          },
        ],
      },
      {
        id: 6,
        title: "Component Replacement",
        description:
          "Expert replacement of elevator components, from motors and cables to control systems and door mechanisms.",
        image:
          i2,
        features: [
          {
            icon: "⚙️",
            title: "Quality Parts",
            description: "Use of high-quality, manufacturer-approved replacement parts for all repairs.",
          },
          {
            icon: "👨‍🔧",
            title: "Expert Technicians",
            description: "Skilled technicians with specialized training in elevator component replacement.",
          },
          {
            icon: "🔄",
            title: "Minimal Disruption",
            description: "Efficient replacement process designed to minimize service interruption.",
          },
        ],
      },
    ],
    modernization: [
      {
        id: 7,
        title: "Control System Upgrades",
        description:
          "Modernize your elevator's control system to improve performance, energy efficiency, and user experience.",
        image:
          u1,
        features: [
          {
            icon: "💻",
            title: "Smart Controls",
            description: "Implementation of modern, intelligent control systems with advanced features.",
          },
          {
            icon: "⚡",
            title: "Energy Efficiency",
            description: "Upgrades that reduce energy consumption and operating costs.",
          },
          {
            icon: "📱",
            title: "User Interface",
            description: "Modern, intuitive user interfaces for improved passenger experience.",
          },
        ],
      },
      {
        id: 8,
        title: "Aesthetic Modernization",
        description:
          "Refresh the appearance of your elevator cabins with modern designs, materials, and lighting solutions.",
        image:
          u2,
        features: [
          {
            icon: "🎨",
            title: "Interior Design",
            description: "Custom interior designs to match your building's aesthetic and brand identity.",
          },
          {
            icon: "💡",
            title: "Lighting Solutions",
            description: "Modern, energy-efficient lighting systems to enhance cabin appearance and visibility.",
          },
          {
            icon: "🚪",
            title: "Door Upgrades",
            description: "Replacement of outdated doors with modern, quiet, and reliable alternatives.",
          },
        ],
      },
    ],
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Elevator Services</h1>
        <p>Comprehensive elevator solutions for every stage of your elevator's lifecycle</p>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === "installation" ? styles.active : ""}`}
          onClick={() => setActiveTab("installation")}
        >
          Installation
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "maintenance" ? styles.active : ""}`}
          onClick={() => setActiveTab("maintenance")}
        >
          Maintenance
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "repair" ? styles.active : ""}`}
          onClick={() => setActiveTab("repair")}
        >
          Repair
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "modernization" ? styles.active : ""}`}
          onClick={() => setActiveTab("modernization")}
        >
          Modernization
        </button>
      </div>

      <div className={styles.serviceGrid}>
        {services[activeTab].map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceImage}>
              <img src={service.image || "/placeholder.svg"} alt={service.title} />
              <div className={styles.serviceOverlay}>
                <h2>{service.title}</h2>
              </div>
            </div>
            <div className={styles.serviceInfo}>
              <p className={styles.description}>{service.description}</p>
              <div className={styles.featureList}>
                {service.features.map((feature, index) => (
                  <div key={index} className={styles.feature}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <div className={styles.featureContent}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className={styles.serviceButton}>Request Service</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.callToAction}>
        <h2>Expert Elevator Services Tailored to Your Needs</h2>
        <p>
          Our team of certified technicians provides comprehensive elevator services to keep your vertical
          transportation systems running safely and efficiently.
        </p>
        <button className={styles.contactButton}>Schedule a Consultation</button>
      </div>
    </div>
  )
}

