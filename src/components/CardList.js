import React from 'react';
import CategoryCard from './CategoryCard';
import cardData from '../cardData';

import { Row } from 'react-bootstrap';

export default function CardList() {
  return (
    <React.Fragment>
      {cardData.map((value, idx) => (
        <Row className="h-100 d-md-flex">
          <CategoryCard
            key={idx}
            title={value.title}
            description={value.description}
          />
        </Row>
      ))}
    </React.Fragment>
  );
}
