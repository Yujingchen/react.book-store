import React from "react";

export default function RatingStar(props) {
  if (props.rating === 0) {
    return (
      <>
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </>
    );
  } else if (props.rating >= 1 && props.rating < 1.5) {
    return (
      <>
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </>
    );
  } else if (props.rating >= 1.5 && props.rating < 2.5) {
    return (
      <>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </>
    );
  } else if (props.rating >= 2.5 && props.rating < 3.5) {
    return (
      <>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </>
    );
  } else if (props.rating >= 3.5 && props.rating < 4.5) {
    return (
      <>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
      </>
    );
  } else if (props.rating >= 4.5 && props.rating <= 5) {
    return (
      <>
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
      </>
    );
  }
}
