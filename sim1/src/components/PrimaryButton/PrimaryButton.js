import React, { Component } from "react";
import { Link } from "react-router-dom";

const PrimaryButton = props => {
  return (
    <Link to={props.route} className="link">
      <div className={`PrimaryButton ${props.className} flex center`}>
        {props.children}
      </div>
    </Link>
  );
};
export default PrimaryButton;
