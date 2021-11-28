// REACT RELATED
import { React } from 'react';
import './App.scss';

// MAIN SCRIPTS
import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";

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
