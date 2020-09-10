import { combineReducers } from "redux";

const authReducer = (state = { login: false, name: "" }, action) => {
  switch (action.type) {
    case "LOGIN":
    case "LOGOUT":
    case "CHANGE_NAME":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const themeReducer = (
  state = { backgroundColor: "aliceblue", iconName: "snowflake" },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { backgroundColor: "orange", iconName: "sun" };
    case "LOGOUT":
      return { backgroundColor: "aliceblue", iconName: "snowflake" };
    default:
      return state;
  }
};

export default combineReducers({
  authReducer,
  themeReducer,
});
