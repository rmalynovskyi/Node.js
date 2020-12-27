import React from "react";
import Navigation from "/static/components/Navigation.jsx";
import ProductBox from "/static/components/ProductBox.jsx";

export default class ProductPage extends React.Component {
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
    <div class=" col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Каталог</a></li>
                <li class="breadcrumb-item"><a href="#">Наушники</a></li>
                <li class="breadcrumb-item"><a href="#">Беспроводные наушники</a></li>
            </ol>
            <h3>
                Beats Studio Wireless Over-Ear Headphones
            </h3>
        </nav>
        <Navigation className = {"nav nav-tabs"} tabs={[ "Описание", "Характеристики", "Отзывы" ]} />
       <ProductBox className = {"content"}>
        <div class="col-3">
        <img class="img-fluid float-left pic" src="/static/product1.png" />
        </div>
      <div class="text">
         При изготовлении корпуса Beats Studio были использованы прецизионные формы и металлизация поверхности для высокой износостойкости. 
                Наушники поддерживают протокол Bluetooth v4.0 и профили HFP, HSP, A2DP, AVRCP.
      </div>
      <hr class="line"/>
      <button type="button" class="btn btn-primary button">Заказать</button>
       </ProductBox>
        </div>
</main>

<footer class="row">
    <div class="col-12">
        © Codery.camp, 2019
    </div>
</footer>
</React.Fragment>;
    }
}
