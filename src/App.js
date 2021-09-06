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

  //TODO: Add background music

  //TODO: add sound effects,
  // Places where Sound effects can be added: 
  // hide/show button
  // increase/decrease size onClick
  // change texture

  //TODO: REDO THE USER INTERFACE


  // This is a test for mail maps
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
