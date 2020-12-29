import React from "react";
import { Link } from "react-router-dom";
const fetch = require("node-fetch");
export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

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
     {this.state.products? this.renderProducts() : false} 
</main>

<footer className="row">
    <div className="col-12">
        © Codery.camp, 2019
    </div>
</footer>
</React.Fragment>;
    }

    componentDidMount() {
        fetch("api/products").then(function(response) {
            return response.json();
        }).then(function(json) {
            this.setState({
                products: json
            });
        }.bind(this));
    }

    renderProducts() {
        return this.state.products.map(function(item, index) {
            return <div className ="col-sm-5 offset-sm-1">
            <div class="card">
                <img className="card-img-top" src={item.imgURL} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p  className="card-text">{item.description}</p>
                    <h5  className="card-title">Цена: {item.price} грн.</h5>
                    <Link to={"/product/prod"+ (index+1)} className="btn btn-primary ">Заказать</Link>
                </div>
            </div> 
            </div>;
        }, this);
    }
}
