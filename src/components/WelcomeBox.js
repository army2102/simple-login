import React from "react";
import { connect } from "react-redux";

const renderWelcomeText = (name) => {
  return (
    <div>
      <h1>Hello {name} Welcome!!!</h1>
    </div>
  );
};

const WelcomeBox = (props) => {
  return props.login ? renderWelcomeText(props.name) : null;
};

const mapStateToProps = (state) => {
  return {
    name: state.authReducer.name,
    login: state.authReducer.login,
  };
};

export default connect(mapStateToProps)(WelcomeBox);
