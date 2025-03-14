import type React from "react"
import Header from "../../components/Header/Header"
import HeroSlider from "../../components/HeroSlider/HeroSlider"
import Services from "../../components/Services/Services"
import Products from "../../components/Products/Products"
import About from "../../components/About/About"
import Projects from "../../components/Projects/Projects"
import Testimonials from "../../components/Testimonials/Testimonials"
import Contact from "../../components/Contact/Contact"
import CTA from "../../components/CTA/CTA"
import Footer from "../../components/Footer/Footer"
import { useEffect } from "react"

const HomePage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <main>
        <HeroSlider />
        <Services />
        <Products />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

