"use client"

import { useState, useEffect } from "react"
import styles from "./products.module.css";
import p1 from '../../assets/images/products/p1.jpg';
import p2 from '../../assets/images/products/p2.jpg';
import p3 from '../../assets/images/products/p3.jpg';
import p4 from '../../assets/images/products/p4.jpg';
import p5 from '../../assets/images/products/p5.jpg';
import p6 from '../../assets/images/products/p6.jpg';

interface ElevatorProduct {
  id: number
  name: string
  description: string
  features: string[]
  capacity: string
  speed: string
  image: string
}

export default function ElevatorProducts() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "industrial">("residential")

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  const products: Record<string, ElevatorProduct[]> = {
    residential: [
      {
        id: 1,
        name: "Home Lift Classic",
        description:
          "Perfect for family homes, our Home Lift Classic combines elegance with functionality, providing smooth and quiet operation.",
        features: ["Energy efficient", "Compact design", "Low maintenance", "Whisper-quiet operation"],
        capacity: "450 kg",
        speed: "0.15 m/s",
        image:
          p1
      },
      {
        id: 2,
        name: "Villa Panorama",
        description:
          "The Villa Panorama elevator offers a luxurious experience with panoramic views and premium finishes for upscale residences.",
        features: ["Glass panels", "Customizable interior", "Smart home integration", "Energy recovery system"],
        capacity: "630 kg",
        speed: "0.25 m/s",
        image:
          p2
      },
    ],
    commercial: [
      {
        id: 3,
        name: "Office Express",
        description:
          "Designed for office buildings, the Office Express provides reliable transportation with high traffic capacity.",
        features: ["High traffic optimization", "Destination control", "Energy saving mode", "Remote monitoring"],
        capacity: "1000 kg",
        speed: "1.6 m/s",
        image:
          p3
      },
      {
        id: 4,
        name: "Retail Shuttle",
        description:
          "The Retail Shuttle is perfect for shopping centers and retail spaces, offering smooth rides for customers and goods.",
        features: ["Wide entrance", "Durable finishes", "Heavy duty operation", "Accessibility features"],
        capacity: "1250 kg",
        speed: "1.0 m/s",
        image:
          p4
      },
    ],
    industrial: [
      {
        id: 5,
        name: "Cargo Master",
        description:
          "The Cargo Master is built for industrial environments, capable of handling heavy loads with reliability and durability.",
        features: ["Heavy load capacity", "Reinforced cabin", "Industrial-grade components", "Oversized doors"],
        capacity: "2500 kg",
        speed: "0.5 m/s",
        image:
          p5
      },
      {
        id: 6,
        name: "Warehouse Lifter",
        description:
          "Specialized for warehouse operations, the Warehouse Lifter provides efficient vertical transportation for goods and equipment.",
        features: ["Pallet-friendly design", "Robust construction", "High cycle durability", "Easy maintenance access"],
        capacity: "3000 kg",
        speed: "0.4 m/s",
        image:
          p6
      },
    ],
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Elevator Solutions</h1>
        <p>Reliable, safe, and efficient vertical transportation for every need</p>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === "residential" ? styles.active : ""}`}
          onClick={() => setActiveTab("residential")}
        >
          Residential
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "commercial" ? styles.active : ""}`}
          onClick={() => setActiveTab("commercial")}
        >
          Commercial
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "industrial" ? styles.active : ""}`}
          onClick={() => setActiveTab("industrial")}
        >
          Industrial
        </button>
      </div>

      <div className={styles.productGrid}>
        {products[activeTab].map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.specs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Capacity:</span> {product.capacity}
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Speed:</span> {product.speed}
                </div>
              </div>
              <h3>Features</h3>
              <ul className={styles.featureList}>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={styles.requestButton}>Request Quote</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.callToAction}>
        <h2>Find the Perfect Elevator Solution for Your Needs</h2>
        <p>Our team of experts is ready to help you choose the right elevator system</p>
        <button className={styles.contactButton}>Contact Us Today</button>
      </div>
    </div>
  )
}

