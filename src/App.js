import React, { useState } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import SlideBar from "./Menu/SlideBar";


function App() {
  
  const [shape, setShape] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textureType, setTextureType] = useState(0);


  const toggleShape = (index) => {
    setShape(index);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleTextureChange = (index) => {
    setTextureType(index);
  }
  
  //ALERT: Canvas is dumb and loses context when passed to it by redux
  // CHECK DUSTAND to get around this dumb pitfall


  return (
    <>
      <Header toggleMenu={toggleMenu}/> 

      <SlideBar
      
      
      isMenuOpen={isMenuOpen} 
      toggleMenu={toggleMenu} 
      
      setTexture={handleTextureChange} 
      textureType={textureType} 
      
      />

      <Footer
      
      // toggles the shape from circle to Cube
      toggleShape={toggleShape} 
      shape={shape}
      />

      <MainCanvas 
      shape={shape}
      textureType={textureType}
      />

    </>
  );
}

export default App;
