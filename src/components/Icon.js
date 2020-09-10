import React from "react";
import { connect } from "react-redux";
import "./App.css";

const Icon = (props) => {
  return <i className={`massive ${props.iconName} icon`}></i>;
};

const mapStateToProps = (state) => {
  return {
    iconName: state.themeReducer.iconName,
  };
};

export default connect(mapStateToProps)(Icon);
