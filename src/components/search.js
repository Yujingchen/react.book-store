import React, { Component } from "react";
import { HandleSearch } from "../actions/bookAction";
import { connect } from "react-redux";
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

  handleSubmit;

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
          <button
            type="submit"
            className="btn btn-secondary text-light"
            onClick={this.props.HandleSearch.bind(this, keyword)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { HandleSearch }
)(Search);
