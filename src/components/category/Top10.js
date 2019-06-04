import React, { Component } from "react";
import Top10Item from "./Top10Item";
import { AddCartFromBooks } from "../../actions/cartAction";
import { GetMyBooks } from "../../actions/bookAction";

import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import imageNotFound from "../image/ImageNotFound.png";
class Top10 extends Component {
  handleAddCart = id => {
    this.props.AddCartFromBooks(id);
  };
  async componentDidMount() {
    await this.props.GetMyBooks();
    this.setState({ loaded: true });
  }
  render() {
    const { books } = this.props;
    return (
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
                    price={
                      item.saleInfo.hasOwnProperty("listPrice")
                        ? parseFloat(
                            Math.round(item.saleInfo.listPrice.amount * 100) /
                              100
                          ).toFixed(2)
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
                    key={item.id}
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
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books
});
export default connect(
  mapStateToProps,
  { AddCartFromBooks, GetMyBooks }
)(Top10);
