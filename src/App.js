import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Menu from '../src/components/menu/menu'
import Home from '../src/layouts/home/home'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Menu />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
