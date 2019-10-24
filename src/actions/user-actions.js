import {ADD_USER, TOGGLE_USER_FORM} from './action-types';
export const addUser = user => {
    return dispatch => {
        dispatch({
            type: ADD_USER,
            user
        })
    }
}
export const toggleUserForm = () => {
    return dispatch => {
        dispatch({
            type: TOGGLE_USER_FORM
        })
    }
}