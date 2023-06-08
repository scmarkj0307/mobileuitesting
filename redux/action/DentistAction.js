import axios from 'axios';
import { FETCH_DENTIST_REQUEST, FETCH_DENTIST_SUCCESS, FETCH_DENTIST_FAILED } from '../ActionType';
import { DENTIST_URL } from '../../config/APIRoutes';

export const fetchDentists = () =>{
    return async(dispatch) =>{
        try {
            dispatch({
                type: FETCH_DENTIST_REQUEST,
            })
            const response = await axios.get(`${DENTIST_URL}/`);
            dispatch({
                type: FETCH_DENTIST_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: FETCH_DENTIST_FAILED,
                error: error
            })
        }
    }
}