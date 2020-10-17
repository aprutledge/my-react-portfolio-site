import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CategoryCard(props) {
  const style = {
    backgroundColor: '#DADFF7',
    color: '#000004',
    minWidth: '10rem',
    width: '20vw',
    maxWidth: '20rem',
  };

  return (
    <Card className="m-1 shadow" style={style}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
