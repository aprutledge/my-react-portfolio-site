import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Routes from './Routes';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center"
      style={{
        height: '100vh',
        backgroundImage:
          'url(' + process.env.PUBLIC_URL + '/resources/pattern.jpg)',
      }}
    >
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
