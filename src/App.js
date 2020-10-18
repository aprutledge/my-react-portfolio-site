import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="flex-md-row
                 flex-xs-column
                 justify-content-center 
                 align-items-center align-items-xs-center"
      style={{
        backgroundColor: '#0c6291',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
