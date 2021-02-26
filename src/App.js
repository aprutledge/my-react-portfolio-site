import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';

import ProjectsService from './services/ProjectsService';

function App() {
  let projects = ProjectsService.getProjects();

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
}

export default App;
