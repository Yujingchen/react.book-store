import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../bookcard/Cards";
import Sidebar from "../layout/Sidebar";

class MainHome extends Component {
  render() {
    let mainStyle = {};
    this.props.sidebarToggled
      ? (mainStyle = {
          marginLeft: "250px",
          transition: "0.5s"
        })
      : (mainStyle = { marginLeft: "0px", transition: "0.5s" });
    return (
      <div style={mainStyle}>
        <div className="main-content">
          <Cards />
        </div>
        <div className="side-bar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  sidebarToggled: state.book.sidebarToggled
});
export default connect(
  mapStateToProps,
  null
)(MainHome);
