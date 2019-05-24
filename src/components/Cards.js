import React, { Component } from "react";
import Card from "./Card";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { GetMyBooks } from "../actions/bookAction";
import Search from "./Search";
import imageNotFound from "../ImageNotFound.png";
class Cards extends Component {
  componentDidMount() {
    this.props.GetMyBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="container searchContainer border mb-3">
            <Search />
          </div>
          <div className="row">
            {books.map(book => (
              <div className="col-xm">
                <Card
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
                  key={book.id}
                />
              </div>
            ))}
          </div>
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
  { GetMyBooks }
)(Cards);
