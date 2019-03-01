import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataAsync } from "../actions/index";
import ListProduct from "../components/Product/ListProduct";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
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
    getProducts: () => {
      dispatch(getDataAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
