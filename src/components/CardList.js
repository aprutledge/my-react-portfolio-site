import React from 'react';
import CategoryCard from './CategoryCard';
import cardData from '../cardData';

import { Row } from 'react-bootstrap';

export default function CardList() {
  return (
    <div className="cardList mx-auto my-auto">
      <Row>
        {cardData.map((value, idx) => (
          <div className="col-xs-12 col-sm-6 col-md-4">
            <CategoryCard
              key={idx}
              title={value.title}
              description={value.description}
              src={value.src}
            />
          </div>
        ))}
      </Row>
    </div>
  );
}
