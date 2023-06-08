import { FETCH_SERVICES_FAILED, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS } from "../ActionType";


const reducer = (state={}, action) =>{
    switch(action.type){
        case FETCH_SERVICES_REQUEST:
            return { ...state, loading:true };
        case FETCH_SERVICES_SUCCESS:
            return { ...state, services:action.payload, loading: false};
        case FETCH_SERVICES_FAILED:
            return { ...state, error:action.error, loading:false};
        default:
            return state;
    }
};

export default reducer;