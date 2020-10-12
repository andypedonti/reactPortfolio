import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


class App extends React.Component {






  render() {
    return (
      <Router>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />

      </Router>
    );
  }
}

export default App;
