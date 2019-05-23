import React, { Component } from "react";
import Cards from "../Cards";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
class Main extends Component {
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
        <div>
          <Cards />
        </div>
        <Sidebar />
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
)(Main);
