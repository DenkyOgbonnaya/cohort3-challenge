import {ADD_USER, TOGGLE_USER_FORM} from '../actions/action-types'
const initialState = {
    users: [],
    isVisibleUserForm: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER : 
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        case TOGGLE_USER_FORM : 
            return {
                ...state,
                isVisibleUserForm: !state.isVisibleUserForm
            }
        default: return state;
    }
}

export default userReducer;