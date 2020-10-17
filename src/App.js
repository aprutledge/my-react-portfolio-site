import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CategoryCard from './components/CategoryCard';
import Header from './components/Header';
import Footer from './components/Footer';

import cardData from './cardData';

function App() {
  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#0c6291',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      {cardData.map((value, idx) => (
        <CategoryCard
          key={idx}
          title={value.title}
          description={value.description}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
