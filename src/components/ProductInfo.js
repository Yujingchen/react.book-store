import React, { Component } from "react";
import { connect } from "react-redux";

class ProductInfo extends Component {
  render() {
    if (this.props.book === {}) {
      return null;
    }
    const { saleInfo, volumeInfo, accessInfo } = this.props.book;
    return (
      <div className="container">
        <div className="row">
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Publisher</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("publisher")
                  ? volumeInfo.publisher
                  : "Unknown publisher"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Published On</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("publishedDate")
                  ? volumeInfo.publishedDate
                  : "Unknown published date"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Pages</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("pageCount")
                  ? volumeInfo.pageCount
                  : "Unknown page"}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>ISBN</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("industryIdentifiers")
                  ? volumeInfo.industryIdentifiers[0].identifier
                  : "Unknown ISBN"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Ebook Avaiable</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {saleInfo.hasOwnProperty("isEbook")
                  ? saleInfo.isEbook
                      .toString()
                      .replace("t", "T")
                      .replace("f", "F")
                  : "Unknown"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Reading Mode</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("readingModes")
                  ? volumeInfo.readingModes.text
                    ? "Text  "
                    : null
                  : null + volumeInfo.hasOwnProperty("readingModes")
                  ? volumeInfo.readingModes.image
                    ? "Image  "
                    : null
                  : null}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Sale Area</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {saleInfo.hasOwnProperty("country")
                  ? saleInfo.country.replace("FI", "Finland")
                  : "Unknown country"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              {" "}
              <span>Maturity Rating</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {volumeInfo.hasOwnProperty("maturityRating")
                  ? volumeInfo.maturityRating
                      .replace("MATURE", "Mature")
                      .replace("NOT_", "Not ")
                  : "No rating"}
              </span>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-title">
              <span>Best For</span>
            </div>
            <div>
              {" "}
              <span className="info-box-text">
                {" "}
                {accessInfo.hasOwnProperty("pdf")
                  ? accessInfo.pdf.isAvailable
                    ? "PDF "
                    : null
                  : null + accessInfo.hasOwnProperty("epub")
                  ? accessInfo.pdf.isAvailable
                    ? "EPUB "
                    : null
                  : null}
              </span>
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
  null
)(ProductInfo);
