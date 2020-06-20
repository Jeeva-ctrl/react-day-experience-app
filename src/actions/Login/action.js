import axios from "axios";

const url = "https://dailyexperienceapi.azurewebsites.net";

function dispatchPostResponse(response) {
  return {
    type: "LOGIN_USER",
    token: response.token,
    email: response.email,
    error: response.error,
  };
}

export const ClearLoginError = () => ({
  type: "CLEAR_LOGIN_ERROR",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const LoginUser = (email, password, callBack) => (dispatch) => {
  dispatch({
    type: "CLEAR_ERROR",
  });
  axios
    .post(url + "/api/Login", { email, password })
    .then((response) => {
      if (response.status === 200) {
        callBack(response.data.token ? true : false);

        return dispatch(dispatchPostResponse(response.data));
      }
    })
    .catch((error) => {
      console.log("n/W error",error);
      callBack(false);
      dispatch({
        type: "HTTP_ERROR",
        payload:
          "Sorry 😞 Error occured while processing your request .Please try again after some time .",
      });
    });
};
