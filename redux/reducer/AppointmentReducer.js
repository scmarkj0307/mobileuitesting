import { FETCH_APPOINTMENT_FAILED, FETCH_APPOINTMENT_REQUEST, FETCH_APPOINTMENT_SUCCESS } from "../ActionType"

const initialState = {
    loading: false,
    appointment: [],
    error: null
}
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_APPOINTMENT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_APPOINTMENT_SUCCESS:
            return{
                ...state,
                appointment: action.payload,
                loading:false
            }
        case FETCH_APPOINTMENT_FAILED:
            return{
                ...state,
                error: action.error,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;