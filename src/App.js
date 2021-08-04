import React, { useRef, useState, Suspense } from 'react';

import './App.scss';

import MainCanvas from './Canvas';
import Header from './Header';


function App() {
  

  return (
    <>
      <Header /> 

      <MainCanvas />
    
    </>
  );
}

export default App;
