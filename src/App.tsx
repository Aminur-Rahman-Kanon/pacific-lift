import { ReactNode, useState, lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import HomePage from "./pages/homepage/HomePage"
import Footer from "./components/Footer/Footer"
import Sidedrawer from "./components/sidedrawer/Sidedrawer"
import { ContextProvider } from "./hoc/context"
import { ToastContainer } from 'react-toastify';
import "./App.css"
const AboutUs = lazy(() => import('./pages/about/aboutUs'));
const Projects = lazy(() => import('./pages/projects/projects'));
const Services = lazy(() => import('./pages/services/services'));
const Products = lazy(() => import('./pages/products/products'));

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
      <ToastContainer />
      <ContextProvider.Provider value={{ sidedrawer, toggleSidedrawer }}>
        <Header />
        <Sidedrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>} />
          <Route path="/services" element={<Suspense fallback={<div>Loading....</div>}>
            <Services />
          </Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<div>Loading....</div>}>
            <Projects />
          </Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>} />
        </Routes>
        {/* <main>
          <HeroSlider />
          <Services />
          <Products />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <CTA />
        </main> */}
        <Footer />
      </ContextProvider.Provider>
    </div>
  )
}

export default App

