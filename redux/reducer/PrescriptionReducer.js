import { FETCH_FEE_REQUEST, FETCH_FEE_SUCCESS, FETCH_FEE_FAILED, FETCH_PRESCRIPTION_REQUEST, FETCH_PRESCRIPTION_SUCCESS } from '../ActionType';

const reducer = (state={}, action) =>{
    switch(action.type){
        case FETCH_PRESCRIPTION_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRESCRIPTION_SUCCESS:
            return { ...state, prescription:action.payload, loading: false };
        default: return state;
    }
}

export default reducer;