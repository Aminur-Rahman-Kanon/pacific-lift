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
import useOnScreen from './components/customHook/useOnScreen/useOnScreen';

function App() {

  const navigate = useNavigate();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const serviceRef = useRef(null);
  const blogRef = useRef(null);
  
  const refs = {
    homeRef, aboutRef, productsRef, serviceRef, blogRef
  }
  
  const [currentPath, setCurrentPath] = useState('homeRef');
  const elIntersecting = useOnScreen(refs, currentPath, setCurrentPath);

  const smoothScrolling = (item) => {
    if (!item) return;
    setCurrentPath(item);
  }
  
  useEffect(() => {
    if (refs[currentPath] && refs[currentPath].current){
      refs[currentPath].current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }
  }, [currentPath])

  return (
    <div className="App">
      <ContextApi.Provider value={{path: currentPath, setPath: smoothScrolling, refs, elIntersecting}}>
        {/* <Navbar /> */}
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
