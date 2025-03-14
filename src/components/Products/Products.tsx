import type React from "react"
import styles from "./Products.module.css";
import p1 from '../../assets/images/products/p1.jpg';
import p2 from '../../assets/images/products/p2.jpg';
import p3 from '../../assets/images/products/p3.jpg';
import { Link } from "react-router-dom";

interface Product {
  id: number
  image: string
  title: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    image: p1,
    title: "Commercial Elevators",
    description: "High-capacity elevators designed for office buildings, hotels, and shopping centers.",
  },
  {
    id: 2,
    image: p2,
    title: "Residential Elevators",
    description: "Compact, elegant elevators for homes and small apartment buildings.",
  },
  {
    id: 3,
    image: p3,
    title: "Panoramic Elevators",
    description: "Glass-walled elevators offering stunning views for luxury buildings and attractions.",
  },
]

const Products: React.FC = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Products</h2>
          <p className={styles.description}>
            Cutting-edge elevator systems designed for efficiency, safety, and aesthetic appeal.
          </p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <Link key={product.id} to={'/products'} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={product.image || "/placeholder.svg"} alt={product.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <div className={styles.button}>Learn More</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

