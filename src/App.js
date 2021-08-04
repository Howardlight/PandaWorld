import React, { useState } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas';
import Header from './Header';
import Footer from "./Footer";

function App() {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isCircle, setIsCircle] = useState(true);

  // TODO: Figure out Context, so that you don't have to pass states
  // from 1 component to the other,
  // ALERT: THIS WILL GET MESSY

  const ChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleShape = () => {
    setIsCircle(!isCircle);
  }

  return (
    <>
      <Header /> 

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
