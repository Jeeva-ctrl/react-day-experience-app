const initialState = {
  token: null,
  error: null,
  email:null
};

export default function (state = initialState, action) {

  switch (action.type) {
     
    case "LOGIN_USER":
      return { ...state, token: action.token, email : action.email,error: action.error };
    case "CLEAR_LOGIN_ERROR":
        return { ...state, token: null,email:null, error: null };
        case "LOGOUT":
          return { ...state, token: null,email:null, error: null };

    default:
      return state;
  }
}
