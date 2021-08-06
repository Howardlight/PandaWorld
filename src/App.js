import React, { useState } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";

import { slide as Menu } from "react-burger-menu";
import "./Menu.module.scss";


function App() {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isCircle, setIsCircle] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Figure out Context, so that you don't have to pass states
  // from 1 component to the other,
  // ALERT: THIS WILL GET MESSY

  const ChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleShape = () => {
    setIsCircle(!isCircle);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Header toggleMenu={toggleMenu}/> 

      <Menu customBurgerIcon={false} isOpen={isMenuOpen} id={"sidebar"}>
        <h4 className="menu-item">Menu Item</h4>
        <h4 className="menu-item">Use Texture</h4>
        <h4 className="menu-item">Toggle Daytime</h4>
      </Menu>

      <Footer
      
      // handles/toggles if shape is visible
      toggleVisibility={ChangeVisibility} 
      isVisible={isVisible}
      
      // toggles the shape from circle to Cube
      toggleShape={toggleShape} 
      shape={isCircle}
      />

      <MainCanvas isVisible={isVisible} isCircle={isCircle}/>

    </>
  );
}

export default App;
