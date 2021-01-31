import React from 'react';

import './App.css';

import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


class App extends React.Component {

  
  




  render() {
    return (
      <div className="body">
        <NavBar />
        <About />
        <Portfolio />
        <Footer />
      </div>
      
    );
  }
}

export default App;
