import axios from "axios";

const url = "https://localhost:5001";

function dispatchPostResponse(data) {
  return {
    type: "FETCH_SUCCESS",
    payload: data,
  };
}

export const FetchFeed = (callBack) => (dispatch) => {
  axios
    .get(url + "/Feed")
    .then((response) => {
      if (response.status === 200) {
        callBack();
        var res = dispatchPostResponse(response.data);
        return dispatch(res);
      }
    })
    .catch((error) => {
      console.log("n/W error", error);
      callBack();
      dispatch({
        type: "FETCH_FAILURE",
        payload:
          "Sorry 😞 Error occured while processing your request .Please try again after some time .",
      });
    });
};
