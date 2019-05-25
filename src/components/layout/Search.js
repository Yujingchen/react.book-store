import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HandleSearch } from "../../actions/bookAction";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const { keyword } = this.state;
    return (
      <div className="input-group row">
        <input
          className="inputfield"
          onChange={this.handleInputChange}
          type="search"
          placeholder="Search book on google book store"
          id="input"
          value={keyword}
        />
        <div className="input-group-append">
          <Link
            to={`/search/${keyword}`}
            type="submit"
            className="btn btn-secondary text-dark"
            onClick={this.props.HandleSearch.bind(this, keyword)}
          >
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { HandleSearch }
)(Search);
