import axios from "axios";

const url = "https://localhost:5001";

function dispatchPostResponse(response) {
  return {
    type: "REGISTER_SUCCESS",
    payload: "Registration Completed Successfully",
  };
}

export const RegisterUser = (username, email, password, callBack) => (
  dispatch
) => {
  console.log(username);
  dispatch({
    type: "CLEAR_ERROR",
  });
  axios
    .post(url + "/Register", { username, email, password })
    .then((response) => {
      if (response.status === 200) {
        callBack();
        if (response.data.isSuccess)
          return dispatch(dispatchPostResponse(response));
        else {
          dispatch({
            type: "HTTP_ERROR",
            payload: response.data.error,
          });
        }
      }
    })
    .catch((error) => {
      console.log("n/W error",error);
      callBack();
      dispatch({
        type: "HTTP_ERROR",
        payload:
          "Sorry 😞 Error occured while processing your request .Please try again after some time .",
      });
    });
};
