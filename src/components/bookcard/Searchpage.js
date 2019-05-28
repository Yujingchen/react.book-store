import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Search from "../layout/Search";
import Card from "./Card";
import { SearchMore } from "../../actions/bookAction";
import { AddCartFromResult } from "../../actions/cartAction";
import imageNotFound from "../image/ImageNotFound.png";

class Searchpage extends Component {
  state = { totalItems: 10 };
  handleLoadMore = () => {
    this.setState(
      {
        totalItems: this.state.totalItems + 10
      },
      () => {
        this.props.SearchMore(this.props.params.keyword, this.state.totalItems);
        // params.keyword comes from parent component, SearchMore function takes in keyword and totalItems
      }
    );
  };
  handleAddCart = id => {
    this.props.AddCartFromResult(id);
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

          {/* REST API Response an object when there is not item matached with search keyword, fixed by checking result before rendering */}
          {Array.isArray(result) ? (
            result.length !== 0 ? (
              <div className=" main-content">
                <div className="row">
                  {result.map((book, i) => (
                    <div className="col-xm" key={book.id}>
                      <Card
                        addCart={this.handleAddCart.bind(this, book.id)}
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
                      SEE MORE
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              "No exact matches found"
            )
          ) : (
            "No exact matches found"
          )}
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
  { SearchMore, AddCartFromResult }
)(Searchpage);
