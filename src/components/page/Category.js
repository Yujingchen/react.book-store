import React, { Component } from "react";
import { connect } from "react-redux";
import Top10Collection from "../category/Top10Collection";
// import Sidebar from "../layout/Sidebar";

class Category extends Component {
  render() {
    // let mainStyle = {};
    // this.props.sidebarToggled
    //   ? (mainStyle = {
    //       marginLeft: "250px",
    //       transition: "0.5s"
    //     })
    //   : (mainStyle = { marginLeft: "0px", transition: "0.5s" });
    return (
      <div>
        <div>
          <Top10Collection />
        </div>
        <div className="side-bar" />
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
)(Category);
