// PatientReducer.js

import {
  FETCH_PATIENT_FAILED,
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  LOGIN_PATIENT_REQUEST,
  LOGOUT_PATIENT_SUCCESS
} from '../ActionType';

const initialState = {
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_REQUEST,
    LOGIN_PATIENT_REQUEST:
      return{
        ...state,
        loading: true,
      }
    case FETCH_PATIENT_SUCCESS:
      return {
        ...state,
        patient: action.payload, // Update patient with action.payload
        loading: false,
      };
    case FETCH_PATIENT_FAILED:
      return {
        ...state,
        error: action.error,
        loading:false
      };
    case LOGOUT_PATIENT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default patientReducer;
