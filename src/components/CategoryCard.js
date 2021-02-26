import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function CategoryCard(props) {
  const style = {
    backgroundColor: '#DADFF7',
    color: '#000004',
    minWidth: '10rem',
  };

  return (
    <Card
      className="h-100"
      style={{ minWidth: '200px', maxWidth: '375px', maxHeight: '600px' }}
    >
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + '/resources/' + props.src}
        className="img-responsive"
        width="310px"
        height="388px"
      />
      <Button
        variant="light"
        href={'/' + props.title.replace(' ', '')}
        style={{ textTransform: 'capitalize' }}
      >
        {props.title}
      </Button>
      {/* <Card.Title className="text-center">{props.title}</Card.Title> */}
      {/*<Card.Body>{props.description}</Card.Body>*/}
    </Card>
  );
}
