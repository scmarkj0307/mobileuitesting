import { ACTIVE_DENTIST_REQUEST, ACTIVE_DENTIST_SUCCESS, FETCH_DENTIST_FAILED, FETCH_DENTIST_REQUEST, FETCH_DENTIST_SUCCESS, LOGIN_DENTIST_SUCCESS, LOGOUT_DENTIST_SUCCESS, UPDATE_DENTIST_INFO_SUCCESS } from '../ActionType';

const reducer = (state={}, action) =>{
    switch(action.type){
        case FETCH_DENTIST_REQUEST:
            return { ...state, loading: true };
        case FETCH_DENTIST_SUCCESS:
            return { ...state, dentists:action.payload, loading: false };
        case LOGIN_DENTIST_SUCCESS:
            return { ...state, token:action.payload, loading:false };
        case ACTIVE_DENTIST_REQUEST:
            return { ...state, loading: true };
        case ACTIVE_DENTIST_SUCCESS:
            return {...state, activeDentist: action.payload, loading:false};
        case UPDATE_DENTIST_INFO_SUCCESS:
            return {...state, activeDentist: action.payload, loading:false};
        case FETCH_DENTIST_FAILED:
            return { ...state, error: action.error, loading: false };
        case LOGOUT_DENTIST_SUCCESS:
            return {};
        default: return state;
    }
}

export default reducer;