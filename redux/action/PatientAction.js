// Action Types
import axios from 'axios';
import { PATIENT_URL } from '../../config/APIRoutes';
import { FETCH_PATIENT_REQUEST, FETCH_PATIENT_SUCCESS, FETCH_PATIENT_FAILED,ALL_PATIENT_FAILED, ALL_PATIENT_REQUEST, ALL_PATIENT_SUCCESS } from '../ActionType';


export const fetchAllPatient = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ALL_PATIENT_REQUEST,
      });
      const response = await axios.get(`${PATIENT_URL}/fetch`);
      dispatch({
        type: ALL_PATIENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PATIENT_FAILED,
        error: error.response.data.message, // or any other error handling logic you want
      });
    }
  };
};

// Action Creator
export const fetchPatient = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PATIENT_REQUEST,
      });
      const response = await axios.get(`${PATIENT_URL}/fetchPatient/${token}`);
      dispatch({
        type: FETCH_PATIENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PATIENT_FAILED,
        error: error.response.data.message, // or any other error handling logic you want
      });
    }
  };
};
