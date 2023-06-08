import axios from "axios"
import { FETCH_APPOINTMENT_FAILED, FETCH_APPOINTMENT_REQUEST, FETCH_APPOINTMENT_SUCCESS } from "../ActionType"
import { APPOINTMENT_URL } from "../../config/APIRoutes"
import moment from "moment"

export const fetchAppointment = (id) =>{
    return async (dispatch)=>{
        try {
            dispatch({
                type: FETCH_APPOINTMENT_REQUEST,
            })
            const response = await axios.get(`${APPOINTMENT_URL}/`);
            dispatch({
                type:FETCH_APPOINTMENT_SUCCESS,
                payload: response.data.filter((val)=>{ return val.status === "APPROVED"; })
            });
        } catch (error) {
            dispatch({
                type: FETCH_APPOINTMENT_FAILED,
                error: error
            })
        }
    }
}