import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Header() {
  const style = {
    minHeight: '10vh',
  };
  const jumbotronStyle = {
    backgroundColor: '#DADFF7',
    color: '#000004',
  };
  return (
    <div className="px-5 pt-5" style={style}>
      <Jumbotron style={jumbotronStyle}>
        <h1 className="text-center">Hello, world!</h1>
        <p className="px-3">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p className="px-3">
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
