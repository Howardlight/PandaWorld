import React, { useState } from 'react';
import './App.scss';

import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import SlideBar from "./Menu/SlideBar";


function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  //ALERT: Canvas is dumb and loses context when passed to it by redux
  // CHECK DUSTAND to get around this dumb pitfall


  return (
    <>
      <Header toggleMenu={toggleMenu}/> 

      <SlideBar
      
      
      isMenuOpen={isMenuOpen} 
      toggleMenu={toggleMenu} 
      
      />

      {/* <Footer /> */}

      <MainCanvas />

    </>
  );
}

export default App;
