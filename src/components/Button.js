import React from "react";
import { connect } from "react-redux";

import { loginAction, logoutAction, changeNameAction } from "../actions";

const renderButton = (isLogin, loginAction, changeNameAction, logoutAction) => {
  return isLogin ? (
    <div>
      <button className="ui button" onClick={changeNameAction}>
        CHANGE NAME
      </button>
      <button className="ui button" onClick={logoutAction}>
        LOGOUT
      </button>
    </div>
  ) : (
    <div>
      <button className="ui button" onClick={loginAction}>
        LOGIN
      </button>
      <button className="ui button" onClick={logoutAction}>
        LOGOUT
      </button>
    </div>
  );
};

const Button = (props) => {
  return renderButton(
    props.isLogin,
    () => props.loginAction(props.inputBoxValue),
    () => props.changeNameAction(props.inputBoxValue),
    props.logoutAction
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.login,
  };
};

export default connect(mapStateToProps, {
  loginAction,
  logoutAction,
  changeNameAction,
})(Button);
