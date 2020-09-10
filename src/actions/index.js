export const loginAction = (name) => {
  return {
    type: "LOGIN",
    payload: {
      login: true,
      name,
    },
  };
};
export const logoutAction = () => {
  return {
    type: "LOGOUT",
    payload: {
      login: false,
    },
  };
};
export const changeNameAction = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: {
      name,
    },
  };
};
