import React from 'react';

import { Link, Route } from "react-router-dom";

export default class Layout extends React.Component {

  navigate() {
    this.props.history.push("/", null)
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        <br />
        <Link to="archives" class="btn btn-danger">archives</Link>
        <Link to="settings">
          <button class="btn btn-success">
            settings
          </button>
        </Link>

        <button onClick={this.navigate.bind(this)}>Home</button>
      </div>
    );
  }
}