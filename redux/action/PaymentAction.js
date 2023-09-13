import axios from 'axios';
import { CREATE_PAYMENT_FAILED, CREATE_PAYMENT_SUCCESS, FETCH_PATIENT_FAILED, FETCH_PAYMENT_REQUEST, FETCH_PAYMENT_SUCCESS } from '../ActionType';
import { PAYMENT_URL } from '../../config/APIRoutes';

export const fetchPayment = (id) =>{
    return async dispatch =>{
        try {
            dispatch({type: FETCH_PAYMENT_REQUEST})
            const response = await axios.get(`${PAYMENT_URL}/`);
            dispatch({type:FETCH_PAYMENT_SUCCESS, payload:response.data.filter((val)=>{ return val.appointment.patient.patientId === id })});
        } catch (error) {
            dispatch({type:FETCH_PATIENT_FAILED, error:error.response && error.response.data.message});
        }
    }
}

export const createPayment = (id, data) =>{
    return async dispatch => {
        try{
            const response = await axios.post(`${PAYMENT_URL}/paybill/${id}`,data)
            dispatch({type:CREATE_PAYMENT_SUCCESS, payload: response.data});
        }catch(error){
            dispatch({type:CREATE_PAYMENT_FAILED, error:error.response && error.response.data.message});
        }
    }
}