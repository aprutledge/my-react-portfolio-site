import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <Card
      className="h-100 w-75 align-self-center shadow-lg mb-2"
      style={{ minWidth: '200px', backgroundColor: '#f8f9fa' }}
    >
      <Button></Button>
      <Card.Body className="w-75 align-self-center">I'm about me yo</Card.Body>
    </Card>
  );
};

export default Resume;
