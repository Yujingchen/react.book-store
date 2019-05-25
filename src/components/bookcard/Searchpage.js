import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Search from "../layout/Search";
import Card from "./Card";
import { SearchMore } from "../../actions/bookAction";
import imageNotFound from "../image/ImageNotFound.png";

class Searchpage extends Component {
  state = { totalItems: 10 };
  handleLoadMore = () => {
    this.setState(
      {
        totalItems: this.state.totalItems + 10
      },
      () => {
        this.props.SearchMore(
          this.props.match.params.keyword,
          this.state.totalItems
        );
      }
    );
  };
  render() {
    const { result } = this.props;
    const { totalItems } = this.state;
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className="container searchContainer border mb-3">
            <Search />
          </div>
          <div className="collection-title">Search Result</div>
          {result.length !== 0 ? (
            <div className=" main-content">
              <div className="row">
                {result.map((book, i) => (
                  <div className="col-xm" key={book.id}>
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
                      id={book.id}
                    />
                  </div>
                ))}
              </div>
              {result.length >= totalItems ? (
                <div className="loadMore-btn">
                  <button
                    className="myBotton"
                    style={{ backgroundColor: "#fff", color: "#01579b" }}
                    onClick={this.handleLoadMore.bind(this)}
                  >
                    See more
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.book.result
});
export default connect(
  mapStateToProps,
  { SearchMore }
)(Searchpage);
