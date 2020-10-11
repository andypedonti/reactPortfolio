import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {






  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default App;
