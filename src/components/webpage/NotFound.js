import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import Search from "../layout/Search";
import Header from "../layout/Header";
class NotFound extends Component {
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
          <div>
            <div className="header">
              <Header />
            </div>
            <div className="container">
              <div className=" searchContainer border mb-3">
                <Search />
              </div>
              <div className="collection-title">Page Not Found</div>

              <div />
            </div>
          </div>
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
)(NotFound);
