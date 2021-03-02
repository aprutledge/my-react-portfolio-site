import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Routes from './Routes';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center"
      style={{
        backgroundColor: '#0c6291',
        height: '100vh',
      }}
    >
      <Header />
      <Home />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
