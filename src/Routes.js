import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/aboutme">
        <AboutMe />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route>{/* <NotFound /> */}</Route>
    </Switch>
  );
};

export default Routes;
