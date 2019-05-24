import React, { Component } from "react";
import Cards from "../Cards";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

class Result extends Component {
  //   render() {
  //     let mainStyle = {};
  //     this.props.sidebarToggled
  //       ? (mainStyle = {
  //           marginLeft: "250px",
  //           transition: "0.5s"
  //         })
  //       : (mainStyle = { marginLeft: "0px", transition: "0.5s" });
  //     return (
  //       <div style={mainStyle}>
  //         <div className="main-content">
  //           <Cards books={this.props.result} />
  //         </div>
  //         <div className="side-bar">
  //           <Sidebar />
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  // const mapStateToProps = state => ({
  //   sidebarToggled: state.book.sidebarToggled,
  //   result: state.book.result
  // });
  // export default connect(
  //   mapStateToProps,
  //   null
  // )(Result);

  render() {
    return <div>hi</div>;
  }
}
export default Result;
