import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CategoryCard(props) {
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
        style={{ textTransform: 'capitalize' }}
      >
        {props.title}
      </Button>
      {/* <Card.Title className="text-center">{props.title}</Card.Title> */}
      {/*<Card.Body>{props.description}</Card.Body>*/}
    </Card>
  );
}
