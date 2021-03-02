import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './Header';
import CardList from './CardList';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
  const [home, setHome] = useState(null);
  const navigateCards = (where) => {
    console.log(where);
    setHome(where);
  };

  if (home === 'projects') {
    return <Projects />;
  } else if (home === 'aboutme') {
    return <AboutMe />;
  } else if (home === 'resume') {
    return <Resume />;
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
