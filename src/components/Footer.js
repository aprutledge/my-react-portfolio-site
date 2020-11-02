import React from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { Linkedin, GitHub, Mail } from 'react-feather';

export default function Footer() {
  return (
    <Navbar className="justify-content-center">
      <Nav>
        <Nav.Link href="https://www.google.com" rel="noopener noreferrer">
          <Mail />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com" rel="noopener noreferrer">
          <Linkedin />
        </Nav.Link>
        <Nav.Link href="https://www.github.com" rel="noopener noreferrer">
          <GitHub />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
