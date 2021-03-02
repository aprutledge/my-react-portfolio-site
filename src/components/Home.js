import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './Header';
import CardList from './CardList';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
  const [home, setHome] = useState('home');
  const navigateCards = (where) => {
    console.log(where);
    setHome(where);
  };

  if (home === 'projects') {
    return (
      <Projects
        navigateCards={(where) => {
          navigateCards(where);
        }}
      />
    );
  } else if (home === 'aboutme') {
    return (
      <AboutMe
        navigateCards={(where) => {
          navigateCards(where);
        }}
      />
    );
  } else if (home === 'resume') {
    return (
      <Resume
        navigateCards={(where) => {
          navigateCards(where);
        }}
      />
    );
  } else {
    return (
      <CardList
        navigateCards={(where) => {
          navigateCards(where);
        }}
      />
    );
  }
};

export default Home;
