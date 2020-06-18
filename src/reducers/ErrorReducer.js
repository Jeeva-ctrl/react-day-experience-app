const initialState = {
  showErrorModal: false,
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "HTTP_ERROR":
      return { ...state, showErrorModal: true, errorMessage: action.payload };
      case "CLEAR_ERROR":
        return { ...state, showErrorModal: false, errorMessage: action.payload };

    default:
      return state;
  }
}
