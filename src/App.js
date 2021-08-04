import React, { useRef, useState, Suspense } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas';
import Header from './Header';
import Footer from "./Footer";

function App() {
  
  const [isVisible, setIsVisible] = useState(true);

  const ChangeVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <>
      <Header /> 

      <Footer visibility={ChangeVisibility}/>

      <MainCanvas visibility={isVisible}/>

    </>
  );
}

export default App;
