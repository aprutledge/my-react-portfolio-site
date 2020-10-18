import React from 'react';
import CategoryCard from './CategoryCard';
import cardData from '../cardData';

export default function CardList() {
  return (
    <div
      className="d-md-flex flex-md-row
                flex-xs-column
                justify-content-center
                "
      style={{
        backgroundColor: '#0c6291',
        width: '100vw',
      }}
    >
      {cardData.map((value, idx) => (
        <CategoryCard
          key={idx}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
}
