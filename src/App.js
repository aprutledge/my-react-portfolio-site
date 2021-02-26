import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Routes from './Routes';
import ProjectsService from './services/ProjectsService';

function App() {
  let projects = ProjectsService.getProjects();

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
