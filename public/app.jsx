 import React from "react";
 import ReactDOM from "react-dom";

 class Nav extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             activeIndex: 0
         };
     }

     onItemClick(event) {
         const index = Number(event.currentTarget.getAttribute("data-index"));
         this.setState({
             activeIndex: index
         });
     }

     render() {
         return <div class= {this.props.className}>
    {this.props.tabs.map(function(item, index){
    const isActive = index === this.state.activeIndex;
   return <a class={isActive ? "nav-item nav-link active" : "nav-item nav-link"} href="#" data-index={index} onClick={this.onItemClick.bind(this)}>{item}</a>;
}, this)}     
  </div>;
     }
 }

 const header = <header class="row bg-primary">
  <nav class="navbar navbar-dark navbar-expand">
    <div class="col-8 offset-4">
      <Nav className = {"navbar-nav"} tabs={[ "Каталог", "Доставка", "Гарантии", "Контакты" ]} />
    </div>
  </nav>
</header>;

 const main = <main class="row">
  <div class=" col-md-8 offset-md-2 col-sm-10 offset-sm-1">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Каталог</a></li>
        <li class="breadcrumb-item"><a href="#">Вентиляция</a></li>
        <li class="breadcrumb-item"><a href="#">ПВУ</a></li>
      </ol>
      <h3>
        ПВУ Turkov ZENIT 350 HECO
      </h3>
    </nav>
       <Nav className = {"nav nav-tabs"} tabs={[ "Описание", "Характеристики", "Отзывы" ]} />
    <div class="content">
      <div class="col-3">
        <img class="img-fluid float-left pic" src="/static/product.png" />
      </div>
      <div class="text">
        Вентиляционная установка с рекуперацией тепла и влаги в легком и универсальном корпусе из вспенненного полипропилена предназначена для поддержания климата в жилых помещениях,или небольших офисах, магазинах.
      </div>
      <hr class="line"/>
      <button type="button" class="btn btn-primary button">Заказать</button>
      </div>
  </div>
</main>;

 const footer = <footer class="row">
  <div class="col-12">
    © Codery.camp, 2019
  </div>
</footer>;

 const root = document.querySelector("#target");
 ReactDOM.render([header, main, footer], root);
 