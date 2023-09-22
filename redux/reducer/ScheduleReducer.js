import { FETCH_SCHEDULE_FAILED, FETCH_SCHEDULE_REQUEST, FETCH_SCHEDULE_SUCCESS } from "../ActionType"


const reducer = (state={}, action)=>{
    switch(action.type){
        case FETCH_SCHEDULE_REQUEST:
            return {...state, loading:true};
        case FETCH_SCHEDULE_SUCCESS:
            return {...state, schedule:action.payload, loading:false};
        case FETCH_SCHEDULE_FAILED:
            return {...state, error:action.error, loading:false};
        default:
            return state;
    }
}

export default reducer;