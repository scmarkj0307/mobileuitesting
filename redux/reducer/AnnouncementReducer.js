import { FETCH_ANNOUNCEMENT_FAILED, FETCH_ANNOUNCEMENT_REQUEST, FETCH_ANNOUNCEMENT_SUCCESS } from "../ActionType";

const reducer = (state={}, action)=>{
    switch (action.type) {
        case FETCH_ANNOUNCEMENT_REQUEST:
            return { ...state, loading:true}
        case FETCH_ANNOUNCEMENT_SUCCESS:
            return {...state, announcement: action.payload, loading:false}
        case FETCH_ANNOUNCEMENT_FAILED:
            return {...state, error:action.error, loading:false}
        default: return state;
    }
}

export default reducer;