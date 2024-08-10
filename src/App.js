import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Topbar from './components/topbar/topbar';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import ContextApi from './components/contentApi/contextApi';
import './App.css';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const serviceRef = useRef(null);
  const summaryRef = useRef(null);
  const statusRef = useRef(null);

  const refs = {
    homeRef, aboutRef, productsRef, serviceRef, summaryRef, statusRef
  }

  const [currentPath, setCurrentPath] = useState('homeRef');  

  const scrollIntoView = (item) => {
    refs[item].current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    setCurrentPath(item);
  }

  return (
    <div className="App">
      <ContextApi.Provider value={{path: currentPath, setPath: setCurrentPath, scrollIntoView, refs}}>
        <Navbar />
        <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
