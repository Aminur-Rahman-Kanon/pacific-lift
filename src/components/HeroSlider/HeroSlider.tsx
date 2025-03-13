"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import styles from "./HeroSlider.module.css";
import b1 from '../../assets/images/banner/b1.jpg';
import b2 from '../../assets/images/banner/b2.jpg';
import b3 from '../../assets/images/banner/b3.jpg';

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: b1,
    title: "Elevating Standards in Vertical Transportation",
    description:
      "Premium elevator solutions for commercial, residential, and industrial buildings with unmatched safety and reliability.",
  },
  {
    id: 2,
    image: b2,
    title: "Innovative Elevator Technology",
    description: "Cutting-edge solutions that combine efficiency, sustainability, and modern design.",
  },
  {
    id: 3,
    image: b3,
    title: "Trusted by Industry Leaders",
    description: "Providing exceptional elevator services to prestigious buildings and facilities worldwide.",
  },
]

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentSlide(index)
        setTimeout(() => {
          setIsAnimating(false)
        }, 1000) // Match this with the CSS transition duration
      }
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className={styles.heroSlider}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.buttons}>
                <button className={styles.primaryButton}>Explore Our Solutions</button>
                <button className={styles.secondaryButton}>Contact Sales Team</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={prevSlide} aria-label="Previous slide">
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
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className={styles.controlButton} onClick={nextSlide} aria-label="Next slide">
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HeroSlider

