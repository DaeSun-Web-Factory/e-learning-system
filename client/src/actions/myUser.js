import { SET_MY_USER } from '../constants/myUserActionType'

export const setMyUser = (userData) =>  (dispatch) => {
    try {
        dispatch({ type : SET_MY_USER, payload: userData});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}