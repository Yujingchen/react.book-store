import React, { Component } from "react";
import { connect } from "react-redux";
import { GetBook } from "../actions/bookAction";
import imageNotFound from "../ImageNotFound.png";
class Bookinfo extends Component {
  componentDidMount() {
    this.props.GetBook();
  }
  render() {
    const { book } = this.props;
    if (!book.volumeInfo) {
      return null;
    }
    return (
      <div className="container">
        <div className="row mb-3 bookInfo">
          <div className="carImage">
            <img
              className="card-img-top"
              src={
                book.volumeInfo.hasOwnProperty("imageLinks")
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : imageNotFound
              }
              alt={this.props.book.volumeInfo.title}
            />
          </div>
          <div>
            <div className="valume-info mb-3">
              <p>Title: {book.volumeInfo.title}</p>
              <p>Subject: {book.volumeInfo.categories[0]}</p>
              <p>Rating: {book.volumeInfo.averageRating.toFixed(1)}</p>
            </div>
            <div className="sale-info">
              <p>{book.saleInfo.listPrice.amount}</p>
              <p>{book.saleInfo.saleability}</p>
            </div>
          </div>
        </div>
        <div className="container book-detail">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="description-tab"
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                DESCRIPTION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="info-tab"
                data-toggle="tab"
                href="#info"
                role="tab"
                aria-controls="info"
                aria-selected="false"
              >
                PRODUCT INFO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                REVIEW
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active tabs-text"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              {book.volumeInfo.description.replace(/<(?:.|\n)*?>/gm, "")}
            </div>
            <div
              className="tab-pane fade tabs-text"
              id="info"
              role="tabpanel"
              aria-labelledby="info-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade tabs-text"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book.book
});
export default connect(
  mapStateToProps,
  { GetBook }
)(Bookinfo);
