import React from 'react';

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, sea cu illud libris vivendum, mea ei singulis volutpat. Dicta eleifend dissentiet vim ea, possimquaerendum ad vel, prima accumsan legendos cu per. Eu vis prima nihil ancillae, sit causae option similique an,per suas temporibus eu. Eam no cibo malis, cum mazim cetero voluptatum ne. Et nam molestie maluisset, nec eu enimidque voluptua.
        </p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }

}