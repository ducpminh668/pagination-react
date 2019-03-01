import React, { Component } from "react";
import { connect } from "react-redux";
import { changePageAsync } from "../actions";

class ProductPaginate extends Component {
  changePage = page => {
    if (page !== this.props.productInfo.page) {
      this.props.changePage(page);
    }
  };
  render() {
    const renderItem = () => {
      let content = [];
      for (let i = 0; i < this.props.productInfo.pages; i++) {
        if (i + 1 === this.props.productInfo.page) {
          content.push(
            <li
              className="page-item active"
              key={i}
              onClick={() => this.changePage(i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          );
        } else {
          content.push(
            <li
              className="page-item"
              key={i}
              onClick={() => this.changePage(i + 1)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          );
        }
      }
      return content;
    };
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              if (this.props.productInfo.page > 1) {
                this.changePage(this.props.productInfo.page - 1);
              }
            }}
          >
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {renderItem()}
          <li
            className="page-item"
            onClick={() => {
              if (this.props.productInfo.page < this.props.productInfo.pages) {
                this.changePage(this.props.productInfo.page + 1);
              }
            }}
          >
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
    changePage: page => {
      dispatch(changePageAsync(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPaginate);
