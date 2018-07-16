import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Link, NavLink } from 'react-router-dom'

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/archives/:slug" component={Archives} />
      <Route path="/settings" component={Settings} />

      <NavLink activeClassName="isActive" to="/archives/slug-slug" class="btn btn-danger">archives</NavLink>
      <NavLink to="/settings">
        <button class="btn btn-success">
          settings
        </button>
      </NavLink>
      <NavLink to="/" class="btn btn-primary">Home</NavLink>
    </div>
  </HashRouter>,
  app);