import React from 'react';

import { HashRouter, Route, Link, NavLink } from 'react-router-dom'


export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <button class="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={"navbar-collapse " + navClass}>
          <ul class="nav navbar-nav">
            <li class={featuredClass}>
              <NavLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</NavLink>
            </li>
            <li class={archivesClass}>
              <NavLink to="/archives" onClick={this.toggleCollapse.bind(this)}>Archives</NavLink>
            </li>
            <li class={settingsClass}>
              <NavLink to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}