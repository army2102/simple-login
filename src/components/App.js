import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Icon from "./Icon";
import WelcomeBox from "./WelcomeBox";
import LoginBox from "./LoginBox";

const App = (props) => {
  return (
    <div className="app" style={{ backgroundColor: props.backgroundColor }}>
      <Icon />
      <WelcomeBox />
      <LoginBox />
      <Icon />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    backgroundColor: state.themeReducer.backgroundColor,
  };
};

export default connect(mapStateToProps)(App);
