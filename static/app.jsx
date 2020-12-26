import React from "react";
import ReactDOM from "react-dom";
import ProductPage from "./pages/ProductPage.jsx";

class App extends React.Component {
  render() {
    return <ProductPage></ProductPage>;
  }
}

const root = document.querySelector("#target");
ReactDOM.render(<App/>, root);
