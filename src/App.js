import React, { useState } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import SlideBar from "./Menu/SlideBar";


function App() {
  
  const [shape, setShape] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleShape = (index) => {
    setShape(index);
  }

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

      <Footer
      
      // toggles the shape from circle to Cube
      toggleShape={toggleShape} 
      shape={shape}
      />

      <MainCanvas 
      shape={shape}
      />

    </>
  );
}

export default App;
