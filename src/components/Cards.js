import React, { Component } from "react";
import Card from "./Card";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { GetMyBooks } from "../actions/bookAction";
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
          <div className="row">
            {books.map(book => (
              <div className="col-xm">
                <Card
                  imgUrl={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  key={book.id}
                  price={book.saleInfo.listPrice.amount}
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
