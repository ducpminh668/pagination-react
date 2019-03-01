import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataAsync } from "../actions/index";
import ListProduct from "../components/Product/ListProduct";

class ProductContainer extends Component {
  componentDidMount() {
    if (this.props.productInfo.page > 0) {
      const { page } = this.props.productInfo;
      this.props.getProducts(page);
    }
  }

  render() {
    return (
      <div>
        <ListProduct products={this.props.productInfo.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: (page, limit ) => {
      dispatch(getDataAsync(page, limit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
