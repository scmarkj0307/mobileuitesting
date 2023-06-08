import { 
    LOGIN_PATIENT_FAILED,
    LOGIN_PATIENT_REQUEST,
    LOGIN_PATIENT_SUCCESS,
    LOGOUT_PATIENT_REQUEST,
    LOGOUT_PATIENT_SUCCESS,
    VALID_PATIENT_FAILED,
    VALID_PATIENT_REQUEST,
    VALID_PATIENT_SUCCESS
  } from "../ActionType";
  
  const initialState = {
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_PATIENT_REQUEST:
      case VALID_PATIENT_REQUEST:
      case LOGOUT_PATIENT_REQUEST:
        return {
          ...state,
          loading: true
        };
      case LOGIN_PATIENT_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload
        };
      case LOGIN_PATIENT_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      case VALID_PATIENT_SUCCESS:
        return {
          ...state,
          loading: false,
          valid: action.payload
        };
      case VALID_PATIENT_FAILED:
        return {
          ...state,
          invalid: action.error,
          loading: false
        };
      case LOGOUT_PATIENT_SUCCESS:
        return {};
      default:
        return state;
    }
  };
  
  export default reducer;