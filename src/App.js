import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from './views/Home';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';
import SwipeView from './views/SwipeView';
import AddSwipe from './views/AddSwipe';
import WebpageNotFound from './views/404.js';

function App() {

  return (
    <>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path='/' render={() => (
          <Home />
        )} />
        <Route exact={true} path='/profile' render={() => (
          <Profile />
        )} />
        <Route exact={true} path='/dashboard' render={() => (
          <Dashboard />
        )} />
        <Route exact={true} path='/swipeinfo/:id' render={() => (
          <SwipeView />
        )} />
        <Route exact={true} path='/addswipe' render={() => (
          <AddSwipe />
        )} />
        <Route path="*" exact={true} render={() => (
          <WebpageNotFound />
        )} />
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;
