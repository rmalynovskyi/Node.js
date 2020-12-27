import React from "react";
import { Link } from "react-router-dom";

export default class IndexPage extends React.Component {
    render() {
        return <React.Fragment>
<header className="row bg-primary">
    <nav className="navbar navbar-dark navbar-expand">
        <div className="col-sm-10 offset-2">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Каталог</a>
                <a className="nav-item nav-link" href="#">Доставка</a>
                <a className="nav-item nav-link" href="#">Гарантии</a>
                <a className="nav-item nav-link" href="#">Контакты</a>
            </div>
        </div>
    </nav>
</header>

<main className="row">
    <div className="col-sm-5 offset-sm-1">
            <div class="card">
                <img className="card-img-top" src="static/product.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">ПВУ Turkov ZENIT 350 HECO</h5>
                    <p  className="card-text">Вентиляционная установка с рекуперацией тепла и влаги</p>
                    <h5  className="card-title">Цена: 5000 грн.</h5>
                    <Link to="/product/prod1" className="btn btn-primary ">Заказать</Link>
                </div>
            </div>
    </div>

    <div  className="col-sm-5 offset-sm-1">
            <div  className="card">
                <img  className="card-img-top " src="static/product1.png" alt="Card image cap"/>
                <div  className="card-body">
                    <h5  className="card-title">Beats Studio Wireless Over-Ear Headphones</h5>
                    <p  className="card-text">Беспроводные наушники Beats Studio</p>
                    <h5  className="card-title">Цена: 10000 грн.</h5>
                    <Link to="/product/prod2" className="btn btn-primary ">Заказать</Link>
                </div>
            </div>
    </div>
</main>

<footer className="row">
    <div className="col-12">
        © Codery.camp, 2019
    </div>
</footer>
</React.Fragment>;
    }
}
