import React from 'react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Featured from './Featured';


export default class Layout extends React.Component {

  navigate() {
    this.props.history.push("/", null)
  }

  render() {

    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <Nav location={this.props.location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              <br />
            </div>
          </div>

          <div class="row">
            <Featured></Featured>
          </div>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}