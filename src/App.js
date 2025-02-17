import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Topbar from './components/topbar/topbar';
import Footer from './components/footer/footer';
import ContextApi from './components/contentApi/contextApi';
import OrderNow from './pages/orderNow/orderNow';
import Category from './pages/category/category';
import Blog from './pages/blog/blog';
import Brochure from './pages/brochure/brochure';
import Contact from './pages/contact/contact';
import './App.css';
import useOnScreen from './components/customHook/useOnScreen/useOnScreen';
import Sidedrawer from './components/sidedrawer/sideadrawer';
import { disableScroll } from './utilities/utilities';
import Backdrop from './components/backdrop/backdrop';
import Quote from './pages/quote/quote';

function App() {
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const serviceRef = useRef(null);
  const blogRef = useRef(null);
  
  const refs = {
    homeRef, aboutRef, productsRef, serviceRef, blogRef
  }

  const [sidedrawer, setSidedrawer] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  
  const [currentPath, setCurrentPath] = useState('homeRef');
  const elIntersecting = useOnScreen(refs, currentPath, setCurrentPath);

  useEffect(() => {
    if (sidedrawer){
      disableScroll();
      setBackdrop(true);
    }
    else {
      setSidedrawer(false);
      setBackdrop(false);
      window.onscroll = () => {};
    }
  }, [sidedrawer])

  const smoothScrolling = (item) => {
    if (!item) return;
    setCurrentPath(item);
  }

  const toggleBackdrop = () => {
    setSidedrawer(false);
    setBackdrop(false);
  }
  
  useEffect(() => {
    if (refs[currentPath] && refs[currentPath].current){      
      refs[currentPath].current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  }, [currentPath])

  const contextValue = {
    path: currentPath,
    setPath: smoothScrolling,
    refs,
    elIntersecting,
    sidedrawer,
    setSidedrawer
  }

  return (
    <div className="App">
      <ContextApi.Provider value={{...contextValue}}>
        <Backdrop backdrop={backdrop} toggle={ toggleBackdrop }/>
        <Topbar />
        <Sidedrawer />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Category />} />
          <Route path='/place-order/:category/:itemId' element={<OrderNow />} />
          <Route path='/blog/:blogId' element={<Blog />} />
          <Route path='/brochure' element={<Brochure />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/get-a-quote' element={<Quote />} />
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
