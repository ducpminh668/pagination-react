import React, { Component } from "react";
import Product from "./Product";

class ListProduct extends Component {
  render() {
    const renderProduct = () => {
      return this.props.products.map(product => {
        return <Product product={product} key={product._id} />;
      });
    };
    return <div className="d-flex">{renderProduct()}</div>;
  }
}

export default ListProduct;
