import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  
  constructor() {
    super();
    this.name = "vinay pandya ";
  }

  getName(greating) {
    return this.name+ greating;
  }

  render() {
    return (
      <h1>Hello {this.getName("how r u?")}</h1>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);