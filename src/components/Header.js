import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Header() {
  const style = {
    backgroundColor: '#FFFFFF',
    color: '#3F5368',
    borderRadius: '25px',
  };
  return (
    <div className="mt-5">
      <h1 className="text-center">Alex Rutledge</h1>
      <h5 className="text-center text-muted px-3">
        I'm a developer living in Little Rock, Arkansas. I make applications with Node, React, and Java.
      </h5>
    </div>
  );
}
