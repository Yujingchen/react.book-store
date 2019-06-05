import React, { Component } from "react";
import Top10 from "./Top10";
export default class Top10Collection extends Component {
  render() {
    return (
      <div>
        <div className="top10-title-wrapper ">
          <h2>Top 10 Fiction</h2>
        </div>
        <div>
          <Top10 />
        </div>
      </div>
    );
  }
}
