import { SET_COURSE_ID, RESET_COURSE_ID } from '../constants/currentCourseType'

export const setCourseId = (courseID) =>  (dispatch) => {
    try {
        dispatch({ type : SET_COURSE_ID, payload: courseID});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const resetCourseId = () =>  (dispatch) => {
    try {
        dispatch({ type : RESET_COURSE_ID, payload: []});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}
