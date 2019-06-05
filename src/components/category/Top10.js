import React, { Component } from "react";
import Top10Item from "./Top10Item";
import { AddCartFromBooks } from "../../actions/cartAction";
import {
  GetTop10Fiction,
  GetTop10Children,
  GetTop10Romance,
  GetTop10Comics
} from "../../actions/top10Action";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import imageNotFound from "../image/ImageNotFound.png";
// import { Link } from "react-router-dom";
class Top10 extends Component {
  handleAddCart = id => {
    this.props.AddCartFromBooks(id);
  };
  async componentDidMount() {
    await this.props.GetTop10Fiction();
    this.setState({ loaded: true });
  }
  handleGetTop10Fiction = () => {
    this.props.GetTop10Fiction();
  };
  handleGetTop10Children = () => {
    this.props.GetTop10Children();
  };
  handleGetTop10Romance = () => {
    this.props.GetTop10Romance();
  };
  handleGetTop10Comics = () => {
    this.props.GetTop10Comics();
  };

  render() {
    const { books } = this.props;
    return (
      <>
        <div className="top10-nav">
          <div className="top10-category">
            <div class="nav nav-pills" role="tablist">
              <button
                className="nav-link active"
                data-toggle="pill"
                role="tab"
                aria-selected="true"
                onClick={this.handleGetTop10Fiction}
              >
                Top 10 Fiction
              </button>
              <button
                className="nav-link"
                data-toggle="pill"
                role="tab"
                aria-selected="false"
                onClick={this.handleGetTop10Children}
              >
                Top 10 Children's books
              </button>
              <button
                className="nav-link"
                data-toggle="pill"
                role="tab"
                aria-selected="false"
                onClick={this.handleGetTop10Romance}
              >
                Top 10 Romance
              </button>
              <button
                className="nav-link"
                data-toggle="pill"
                role="tab"
                aria-selected="false"
                onClick={this.handleGetTop10Comics}
              >
                Top 10 Comics
              </button>
            </div>
          </div>
        </div>
        <div className="top10-main-wrapper">
          <ul className="top10-list">
            {Array.isArray(books) ? (
              books.length !== 0 ? (
                <>
                  {books.map((item, i) => (
                    <Top10Item
                      AddCart={this.handleAddCart.bind(this, item.id)}
                      image={
                        item.volumeInfo.hasOwnProperty("imageLinks")
                          ? item.volumeInfo.imageLinks.smallThumbnail
                          : imageNotFound
                      }
                      title={item.volumeInfo.title}
                      authors={
                        item.volumeInfo.hasOwnProperty("authors")
                          ? item.volumeInfo.authors
                          : null
                      }
                      description={
                        item.volumeInfo.hasOwnProperty("description")
                          ? item.volumeInfo.description.replace(
                              /<(?:.|\n)*?>/gm,
                              ""
                            )
                          : null
                      }
                      priceWhole={
                        item.saleInfo.hasOwnProperty("listPrice")
                          ? Math.trunc(
                              parseFloat(
                                Math.round(
                                  item.saleInfo.listPrice.amount * 100
                                ) / 100
                              ).toFixed(2)
                            )
                          : 0
                      }
                      priceFractional={
                        item.saleInfo.hasOwnProperty("listPrice")
                          ? parseFloat(
                              ((Math.round(
                                item.saleInfo.listPrice.amount * 100
                              ) /
                                100) %
                                1) *
                                100
                            ).toFixed(0)
                          : 0
                      }
                      stock={
                        item.saleInfo.hasOwnProperty("saleability")
                          ? item.saleInfo.saleability === "NOT_FOR_SALE"
                            ? item.saleInfo.saleability.replace(
                                "NOT_FOR_SALE",
                                "Out Of Stock"
                              )
                            : item.saleInfo.saleability.replace(
                                "FOR_SALE",
                                "In Stock"
                              )
                          : "Unknown Sale State"
                      }
                      publisher={
                        item.volumeInfo.hasOwnProperty("publisher")
                          ? item.volumeInfo.publisher
                          : "Unknown publisher"
                      }
                      key={i}
                      listKey={i}
                      id={item.id}
                    />
                  ))}
                </>
              ) : (
                <Spinner />
              )
            ) : (
              <Spinner />
            )}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.top10
});
export default connect(
  mapStateToProps,
  {
    AddCartFromBooks,
    GetTop10Fiction,
    GetTop10Children,
    GetTop10Romance,
    GetTop10Comics
  }
)(Top10);
