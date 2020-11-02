import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

export default function CategoryCard(props) {
  const style = {
    backgroundColor: '#DADFF7',
    color: '#000004',
    minWidth: '10rem',
  };

  return (
    <Col className="h-100 w-100 justify-content-center">
      <Card className="h-75 w-100 shadow" style={style}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
