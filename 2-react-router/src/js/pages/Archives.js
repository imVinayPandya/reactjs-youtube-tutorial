import React from 'react';
import Article from '../components/Article';

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

    const Articles = [
      "Salesforce api introduction",
      "Tenserflow.js has been out",
      "Node.js in production with Aws and Docker"
    ].map((title, i) => <Article key={i} title={title}></Article>);

    return (
      <div>
        <h1>Archives ({slug})</h1>
        <h4>date: {date} filter: {filter}</h4>
        <div class="row">
          {Articles}
        </div>
      </div>
    );
  }
}