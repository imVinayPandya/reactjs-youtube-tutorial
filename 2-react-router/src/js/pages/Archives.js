import React from 'react';

export default class Archives extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { search } = this.props.location;
    const { params } = this.props.match;
    const { slug } = params;

    const queryString = new URLSearchParams(search);
    const date = queryString.get('date');
    const filter = queryString.get('filter');
    return (
      <div>
        <h1>Archives ({slug})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}