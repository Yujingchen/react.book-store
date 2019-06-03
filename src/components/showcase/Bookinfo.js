import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Productinfo from "./ProductInfo";
import { GetBook } from "../../actions/bookAction";
import imageNotFound from "../image/ImageNotFound.png";
import { AddCartFromBooks } from "../../actions/cartAction";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import RatingStar from "../layout/RatingStar";
class Bookinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    const { id } = this.props.id;
    // id comes from this.props.match.params passed by parent component
    await this.props.GetBook(id);
    this.setState({ loaded: true });
  }
  handleAddCart = id => {
    this.props.AddCartFromBooks(id);
  };

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
          <div className="collection-title">Book Detail</div>
          {this.state.loaded ? (
            <>
              {" "}
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
                    <p>
                      Title: <b>{book.volumeInfo.title}</b>
                    </p>
                    <p>
                      Subject:{" "}
                      {book.volumeInfo.hasOwnProperty("categories")
                        ? book.volumeInfo.categories[0]
                        : "Uncategorized"}
                    </p>
                    <p>
                      Rating:{" "}
                      {book.volumeInfo.hasOwnProperty("averageRating") ? (
                        <RatingStar
                          rating={parseFloat(
                            book.volumeInfo.averageRating
                          ).toFixed(1)}
                        />
                      ) : (
                        "Not avaiable"
                      )}
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
                    <Link
                      to="/cart"
                      className="btn btn-danger addCard"
                      onClick={this.handleAddCart.bind(this, book.id)}
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to="/cart"
                      className="btn addToWishlist-btn btn-success"
                      onClick={this.props.addCart}
                    >
                      Add to Wishlist
                    </Link>
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
                      ? book.volumeInfo.description.replace(
                          /<(?:.|\n)*?>/gm,
                          ""
                        )
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
            </>
          ) : (
            <Spinner />
          )}
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
  { GetBook, AddCartFromBooks }
)(Bookinfo);
