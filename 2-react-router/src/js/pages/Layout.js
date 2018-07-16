import React from 'react';


export default class Layout extends React.Component {

  navigate() {
    this.props.history.push("/", null)
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        <br />
      </div>
    );
  }
}