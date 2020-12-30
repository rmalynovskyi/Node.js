import React from "react";
import Navigation from "/static/components/Navigation.jsx";
import ProductBox from "/static/components/ProductBox.jsx";
const fetch = require("node-fetch");

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }
  render() {
    return <React.Fragment>
<header class="row bg-primary">
  <nav class="navbar navbar-dark navbar-expand">
    <div class="col-8 offset-4">
      <Navigation className = {"navbar-nav"} tabs={[ "Каталог", "Доставка", "Гарантии", "Контакты" ]} />
    </div>
  </nav>
</header>

<main class="row">
  {this.renderProduct()}
</main>

<footer class="row">
  <div class="col-12">
    © Codery.camp, 2019
  </div>
</footer>
    </React.Fragment>;
  }

  renderProduct() {
    return this.state.product.map(function(item, index) {
      return <div class=" col-md-8 offset-md-2 col-sm-10 offset-sm-1">
      <h3>
      {item.title}
      </h3>
       <Navigation className = {"nav nav-tabs"} tabs={[ "Описание", "Характеристики", "Отзывы" ]} />
       <ProductBox className = {"content"}>
        <div class="col-3">
        <img class="img-fluid float-left pic" src={item.imgURL} />
        </div>
      <div class="text">
      {item.details}
      </div>
      <hr class="line"/>
      <button type="button" class="btn btn-primary button">Заказать</button>
       </ProductBox>
  </div>;
    }, this);
  }

  componentDidMount() {
    fetch("api/products?key=" + this.props.match.params.key).then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({ product: json });
    }.bind(this));
  }
}
