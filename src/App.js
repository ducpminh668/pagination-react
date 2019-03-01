import React, { Component } from "react";
import "./App.css";
import ProductContainer from "./containers/ProductContainer";
import ProductPaginate from "./components/ProductPaginate";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductContainer />
        <ProductPaginate />
      </div>
    );
  }
}

export default App;
