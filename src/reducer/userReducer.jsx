import {GET_USERS, SET_CURRENT, SET_LOADING, USER_ERROR} from '../actions/types';

const initialState = {
    users: null,
    error: null,
    loading: false,
    current: null
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_USERS:
            return{
                ...state,
                users: action.payload,

            }
        
        case USER_ERROR:
            return{
                ...state,
                error: action.payload
            }
            
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        default:
            return state;
        
    }
}

export default userReducer