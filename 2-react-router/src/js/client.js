import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/archives" component={Archives} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>,
  app);