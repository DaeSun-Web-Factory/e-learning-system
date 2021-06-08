import { SET_BULLETIN_ID, RESET_BULLETIN_ID } from '../constants/currentBulletinType'

export const setBulletinId = (courseID) =>  (dispatch) => {
    try {
        dispatch({ type : SET_BULLETIN_ID, payload: courseID});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const resetBulletinId = () =>  (dispatch) => {
    try {
        dispatch({ type : RESET_BULLETIN_ID, payload: []});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}
