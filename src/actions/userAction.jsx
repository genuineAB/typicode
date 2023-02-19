import {GET_USERS, USER_ERROR, SET_LOADING, SET_CURRENT} from './types';
import axios from 'axios';


export const getUsers = () => async (dispatch) => {
    try {
        setLoading();
        const res = await axios.get('https://jsonplaceholder.typicode.com/users#');

        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }
    catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const setCurrent = (user) => dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: user
    })
}

export default getUsers;