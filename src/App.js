// REACT RELATED
import React, { useState } from 'react';
import './App.scss';

// MAIN SCRIPTS
import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import SlideBar from "./Menu/SlideBar";

// AUDIO AND MUSIC RELATED
// import useSound from 'use-sound';
// import BackgroundMusic from "./Assets/audio/bm.mp3";

function App() {
  
  // OPENING/CLOSING MENU STATE AND TOGGLE
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // BACKGROUND MUSIC
  // TODO: If possible port this into its own JS file
  // TODO: Trim the Background music, mainly the beggining and the end
  // USE AUDACITY
  // Docs for useSound: https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
  // TODO: Add a mute button
  // const [playBackMusic] = useSound(
  //   BackgroundMusic,
  //   { volume: 0.01 }
  // );

  //TODO: add sound effects,
  // Places where Sound effects can be added: 
  // hide/show button
  // increase/decrease size onClick
  // change texture

  //TODO: REDO THE USER INTERFACE
  return (
    <>
      <Header toggleMenu={toggleMenu}/> 

      {/* {playBackMusic()} */}

      <SlideBar
      isMenuOpen={isMenuOpen} 
      toggleMenu={toggleMenu}       
      />

      <Footer />
      <MainCanvas />

    </>
  );
}

export default App;
