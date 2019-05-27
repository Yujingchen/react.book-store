import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <tr>
        <td>
          <div className="cart-product">
            <div>
              <img
                className="cart-img"
                src="http://books.google.com/books/content?id=CCaFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70IZBuR8hVcunBeEMyJjcJsfUzM19tWzIFBt1hNqOltjK5B24uWLYdcqhwx7xdxmiflf7ZIMq2KeJi5HC5p3NTDf6dOoTeBzCBi7NcPDD8CTKecKPLbazV_aVwh95s6VCeQ7hYF&source=gbs_api"
                alt="thumbnail"
              />
            </div>
            {/* <p>Title: {book.volumeInfo.title}</p>
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
                </p> */}
            <div>
              <ul className="cart-info-list">
                <li>
                  Product Number:{" "}
                  {this.props.industryIdentifiers
                    ? this.props.industryIdentifiers[0].identifier
                    : "Unknown ISBN"}{" "}
                </li>
                <li>
                  Subject:{" "}
                  {this.props.categories !== null ? (
                    <p className="card-text">
                      {this.props.categories.map(category => category + "&")}
                    </p>
                  ) : (
                    <p className="card-text">{"Unknown Category"}</p>
                  )}
                </li>
                <li>
                  Authors:{" "}
                  {this.props.authors !== null ? (
                    <p className="card-text">
                      {this.props.authors.map(author => author + "\n")}
                    </p>
                  ) : (
                    <p className="card-text">{"Unknown Author"}</p>
                  )}
                </li>
                <li>
                  Publisher:{" "}
                  {this.props.publisher !== null ? (
                    <p className="card-text">{this.props.publisher}</p>
                  ) : (
                    <p className="card-text">{"Unknown Publisher"}</p>
                  )}
                </li>
                <li>
                  stock:{" "}
                  {this.props.saleInfo.hasOwnProperty("saleability") ? (
                    this.props.saleInfo.saleability === "NOT_FOR_SALE" ? (
                      <p className="text-danger">
                        {this.props.saleInfo.saleability.replace(
                          "NOT_FOR_SALE",
                          "Out Of Stock"
                        )}
                      </p>
                    ) : (
                      <p>
                        {this.props.saleInfo.saleability.replace(
                          "FOR_SALE",
                          "In Stock"
                        )}
                      </p>
                    )
                  ) : (
                    <p>Unknown Sale State</p>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <i className="fas fa-trash-alt" />
        </td>
      </tr>
    );
  }
}

export default Item;
