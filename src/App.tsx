import { ReactNode, useState } from "react"
import Header from "./components/Header/Header"
import HeroSlider from "./components/HeroSlider/HeroSlider"
import Services from "./components/Services/Services"
import Products from "./components/Products/Products"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import CTA from "./components/CTA/CTA"
import Footer from "./components/Footer/Footer"
import Sidedrawer from "./components/sidedrawer/Sidedrawer"
import { ContextProvider } from "./hoc/context"
import { ToastContainer } from 'react-toastify';
import "./App.css"

interface ContextProvider {
  children: ReactNode
}

function App() {

  const [sidedrawer, setSidedrawer] = useState<boolean>(false);

  const toggleSidedrawer = ():void => {
    setSidedrawer((sidedrawer) => !sidedrawer);
  }

  return (
    <div className="app">
      <ContextProvider.Provider value={{ sidedrawer, toggleSidedrawer }}>
        <ToastContainer />
        <Header />
        <Sidedrawer />
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
      </ContextProvider.Provider>
    </div>
  )
}

export default App

