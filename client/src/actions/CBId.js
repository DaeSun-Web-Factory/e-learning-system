import { SET_COURSE_ID, SET_BULLETIN_ID } from '../constants/currentCBType'

export const setCourseId = (courseID) =>  (dispatch) => {
    try {
        dispatch({ type : SET_COURSE_ID, payload: courseID});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const setBulletinId = (bulletinID) =>  (dispatch) => {
    try {
        dispatch({ type : SET_BULLETIN_ID, payload: bulletinID});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}