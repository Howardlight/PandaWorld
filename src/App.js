// REACT RELATED
import {
  React,
  } from 'react';
import './App.scss';

// MAIN SCRIPTS
import MainCanvas from './MainCanvas/MainCanvas';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
// import SlideBar from "./Menu/SlideBar";


function App() {
  
  // PHASED OUT //
  
  // OPENING/CLOSING MENU STATE AND TOGGLE
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  // TODO: remove slidebar Code when ready
  // REMOVE WHEN READY
  // PHASED OUT //

  //TODO: REDO THE USER INTERFACE
  return (
    <>
      <Header 
      // toggleMenu={toggleMenu}
      />

      {/* <SlideBar
      isMenuOpen={isMenuOpen} 
      toggleMenu={toggleMenu}       
      /> */}

      <Footer />
      <MainCanvas />

    </>
  );
}

export default App;
