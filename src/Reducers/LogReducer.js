import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../Actions/Types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
}

const LogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false,
            }
        case LOGS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default LogReducer;