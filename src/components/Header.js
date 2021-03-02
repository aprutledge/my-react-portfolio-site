import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Header() {
  const style = {
    backgroundColor: '#FFFFFF',
    color: '#3F5368',
    borderRadius: '25px',
  };
  return (
    <Jumbotron className="mt-1 mx-5 shadow-lg" style={style}>
      <h1 className="text-center">Alexander Paul Rutledge</h1>
      <p className="text-center px-3">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="px-3"></p>
    </Jumbotron>
  );
}
