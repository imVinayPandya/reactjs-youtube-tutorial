import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom'


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
    </div>
  </HashRouter>,
  app);