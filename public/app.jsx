import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./pages/IndexPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return <Router history={ history }> 
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/:key" component={ProductPage} />
      </Switch>
    </Router>;
  }
}

const root = document.querySelector("#target");
ReactDOM.render(<App/>, root);
