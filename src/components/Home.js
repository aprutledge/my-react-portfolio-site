import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './Header';
import CardList from './CardList';
import Footer from './Footer';

const Home = () => {
  const [home, setHome] = useState(true);
  const navigateCards = (where) => {
    console.log(where);
    setHome(!home);
  };

  if (home) {
    return (
      <CardList
        navigateCards={(where) => {
          navigateCards(where);
        }}
      />
    );
  } else {
    return null;
  }
};

export default Home;
