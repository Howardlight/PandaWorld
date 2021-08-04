import React, { useRef, useState, Suspense } from 'react';

import './App.scss';

import MainCanvas from './MainCanvas';
import Header from './Header';
import Footer from "./Footer";

function App() {
  

  return (
    <>
      <Header /> 

      <Footer />

      <MainCanvas />

    </>
  );
}

export default App;
