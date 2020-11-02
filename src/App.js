import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col } from 'react-bootstrap';

import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App() {
  return (
    <Container
      fluid
      className="d-flex flex-column"
      style={{
        backgroundColor: '#0c6291',
        height: '100vh',
      }}
    >
      <Col>
        <Header />
        <CardList />
        <Footer />
      </Col>
    </Container>
  );
}

export default App;
