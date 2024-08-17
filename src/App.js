import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Topbar from './components/topbar/topbar';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import ContextApi from './components/contentApi/contextApi';
import OrderNow from './pages/orderNow/orderNow';
import Category from './pages/category/category';
import Blog from './pages/blog/blog';
import './App.css';
import { isElementVisible } from './utilities/utilities';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const serviceRef = useRef(null);
  const statusRef = useRef(null);
  const blogRef = useRef(null);

  const navigate = useNavigate();

  const refs = {
    homeRef, aboutRef, productsRef, serviceRef, blogRef
  }

  const [currentPath, setCurrentPath] = useState('homeRef');
  const [divert, setDivert] = useState(false);  

  const scrollIntoView = (item) => {
    if (window.location.pathname !== '/'){
      setDivert(true);
      setCurrentPath(item);
      navigate('/');
    }
    else {
      refs[item].current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      setCurrentPath(item);
    }
  } 

  useEffect(() => {
    if (divert){
      refs[currentPath].current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }

    return () => {
      setDivert(false);
    }
  }, [divert])

  useEffect(() => {
    Object.keys(refs).forEach(ref => isElementVisible(ref, {refs, setCurrentPath}));
  }, [currentPath])

  return (
    <div className="App">
      <ContextApi.Provider value={{path: currentPath, setPath: setCurrentPath, scrollIntoView, refs}}>
        <Navbar />
        <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:category' element={<Category />} />
          <Route path='/place-order/:category/:itemId' element={<OrderNow />} />
          <Route path='/blog/:blogId' element={<Blog />} />
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
