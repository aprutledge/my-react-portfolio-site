import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './Header';
import CardList from './CardList';
import Footer from './Footer';

const Home = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#0c6291',
        height: '100vh',
      }}
    >
      {/* <Header /> */}
      <Container
        fluid
        className="d-flex align-items-center"
        style={{ height: '75vh' }}
      >
        <CardList />
      </Container>
      {/* <Footer /> */}
    </Container>
  );
};

export default Home;
