const initialState = {
    registrationSuccess : false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case "REGISTER_SUCCESS":
        return { ...state, registrationSuccess: true };
        
  
      default:
        return state;
    }
  }
  