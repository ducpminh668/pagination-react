import React, { Component } from "react";
import { connect } from "react-redux";

class ProductPaginate extends Component {
  render() {
    const renderItem = () => {
      console.log(this.props.productInfo.pages);
      let content = [];
      for (let i = 0; i < this.props.productInfo.pages; i++) {
        content.push(
          <li className="page-item" key={i}>
            <a className="page-link" href="#">
              {i + 1}
            </a>
          </li>
        );
      }
      return content;
    };
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {renderItem()}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
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
      // dispatch(getDataAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPaginate);
