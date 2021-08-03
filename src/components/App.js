import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Mercury from './Mercury';
import Venus from './Venus';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/">
          <Mercury />
        </Route>
        <Route path="/venus">
          <Venus />
        </Route>
        <Route path="/earth">
          <Earth />
        </Route>
        <Route path="/mars">
          <Mars />
        </Route>
        <Route path="/jupiter">
          <Jupiter />
        </Route>
        <Route path="/saturn">
          <Saturn />
        </Route>
        <Route path="/uranus">
          <Uranus />
        </Route>
        <Route path="/neptune">
          <Neptune />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;