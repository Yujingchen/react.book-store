import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Search from "../layout/Search";
import { GetMyBooks } from "../../actions/bookAction";
import { LoadMore } from "../../actions/bookAction";
import { AddCartFromBooks } from "../../actions/cartAction";
import { AddCartQuantity } from "../../actions/cartAction";
import Card from "./Card";
import imageNotFound from "../image/ImageNotFound.png";

class Cards extends Component {
  state = { totalItems: 10, quantity: 1 };
  componentDidMount() {
    this.props.GetMyBooks();
  }
  handleLoadMore = () => {
    this.setState(
      {
        totalItems: this.state.totalItems + 10
      },
      () => {
        this.props.LoadMore(this.state.totalItems);
      }
    );
  };

  handleAddCart = (id, quantity) => {
    this.props.AddCartFromBooks(id);
    // this.props.AddCartQuantity(id, quantity);
  };

  render() {
    const { books } = this.props;
    const { totalItems } = this.state;
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className=" searchContainer border mb-3">
            <Search />
          </div>
          <div className="collection-title">Popular Books</div>
          {Array.isArray(books) ? (
            books.length !== 0 ? (
              <div className=" main-content">
                <div className="row">
                  {books.map((book, i) => (
                    <div className="col-xm" key={book.id}>
                      <Card
                        addCart={this.handleAddCart.bind(
                          this,
                          book.id,
                          this.state.quantity
                        )}
                        imgUrl={
                          book.volumeInfo.hasOwnProperty("imageLinks")
                            ? book.volumeInfo.imageLinks.smallThumbnail
                            : imageNotFound
                        }
                        title={book.volumeInfo.title}
                        authors={
                          book.volumeInfo.hasOwnProperty("authors")
                            ? book.volumeInfo.authors
                            : null
                        }
                        price={
                          book.saleInfo.hasOwnProperty("listPrice")
                            ? book.saleInfo.listPrice.amount === 0
                              ? "Free"
                              : book.saleInfo.listPrice.amount + "€"
                            : "Unknown"
                        }
                        id={book.id}
                      />
                    </div>
                  ))}
                </div>
                {books.length >= totalItems ? (
                  <div className="loadMore-btn">
                    <button
                      className="myBotton"
                      style={{ backgroundColor: "#fff", color: "#01579b" }}
                      onClick={this.handleLoadMore.bind(this)}
                    >
                      SEE MORE
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null
          ) : null}

          <div />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: state.book.books
});
export default connect(
  mapStateToProps,
  { GetMyBooks, LoadMore, AddCartFromBooks, AddCartQuantity }
)(Cards);
