import React, { Component } from "react";
import { connect } from "react-redux";
import { GetBook } from "../actions/bookAction";
import imageNotFound from "../ImageNotFound.png";
import Header from "./layout/Header";
import Productinfo from "./ProductInfo";

class Bookinfo extends Component {
  componentDidMount() {
    const { id } = this.props.id;
    this.props.GetBook(id);
  }

  render() {
    const { book } = this.props;
    if (!book.volumeInfo) {
      return null;
    }

    return (
      <div>
        <div>
          <Header />
        </div>
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
                <p>
                  Subject:{" "}
                  {book.volumeInfo.hasOwnProperty("categories")
                    ? book.volumeInfo.categories[0]
                    : "Uncategorized"}
                </p>
                <p>
                  Rating:{" "}
                  {book.volumeInfo.hasOwnProperty("averageRating")
                    ? book.volumeInfo.averageRating.toFixed(1)
                    : "No rating avaiable"}
                </p>
              </div>
              <div className="sale-info">
                <p>
                  Price:{" "}
                  {book.saleInfo.hasOwnProperty("listPrice")
                    ? book.saleInfo.listPrice.amount + "€"
                    : "Unknown price"}
                </p>
                {/* Need to simplify */}
                {book.saleInfo.hasOwnProperty("saleability") ? (
                  book.saleInfo.saleability === "NOT_FOR_SALE" ? (
                    <p className="text-danger">
                      {book.saleInfo.saleability.replace(
                        "NOT_FOR_SALE",
                        "Out Of Stock"
                      )}
                    </p>
                  ) : (
                    <p>
                      {book.saleInfo.saleability.replace(
                        "FOR_SALE",
                        "In Stock"
                      )}
                    </p>
                  )
                ) : (
                  <p>Unknown Sale State</p>
                )}

                {/* // <p>
                //   {book.saleInfo.hasOwnProperty("saleability")
                //     ? book.saleInfo.saleability
                //         .replace("NOT_FOR_SALE", "Out Of Stock")
                //         .replace("FOR_SALE", "In Stock")
                //     : "Unknown sale state"}
                // </p> */}
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
                {book.volumeInfo.hasOwnProperty("description")
                  ? book.volumeInfo.description.replace(/<(?:.|\n)*?>/gm, "")
                  : "..."}
              </div>
              <div
                className="tab-pane fade tabs-text"
                id="info"
                role="tabpanel"
                aria-labelledby="info-tab"
              >
                <Productinfo />
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
