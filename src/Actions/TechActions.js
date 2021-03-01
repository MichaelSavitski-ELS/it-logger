import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './Types';

export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText,
        });
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}