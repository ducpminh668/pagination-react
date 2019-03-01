import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div className="product-name">{this.props.product.name}</div>
        <div className="product-price">{this.props.product.price}</div>
      </div>
    );
  }
}

export default Product;