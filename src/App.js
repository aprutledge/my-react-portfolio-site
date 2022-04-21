import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [windowHeight, setWindowHeight] = useState(1080);

  const getWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    getWindowHeight();
  });

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center"
      style={{
        height: windowHeight,
      }}>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
