const initialState = {
    feed : null,
    error:null,
    failure: false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { ...state, feed: action.payload,failure:false };
        case "FETCH_FAILURE":
        return { ...state, failure : true, error: action.payload };
  
      default:
        return state;
    }
  }
  