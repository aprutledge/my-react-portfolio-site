import React from 'react';
import { Row } from 'react-bootstrap';

import CategoryCard from './CategoryCard';
import cardData from '../cardData';

import '../App.css';

export default function CardList({ navigateCards }) {
  return (
    <div className="cardList mx-auto my-auto">
      <Row>
        {cardData.map((value, idx) => (
          <div key={idx} className="col-xs-12 col-sm-12 col-md-4 my-3">
            <CategoryCard
              id={value.id}
              title={value.title}
              description={value.description}
              src={value.src}
              navigateCards={navigateCards}
            />
          </div>
        ))}
      </Row>
    </div>
  );
}
