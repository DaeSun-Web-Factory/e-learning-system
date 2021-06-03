import * as api from '../api';
import { FETCH_USER_ALL, CREATE_USER, UPDATE_USER} from '../constants/usersActionType';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type : FETCH_USER_ALL, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type : CREATE_USER, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);
        dispatch({ type : UPDATE_USER, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

