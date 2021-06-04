import * as api from '../api';
import { FETCH_COURSE_ALL, CREATE_COURSE, UPDATE_COURSE} from '../constants/coursesActionType';

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses();
        dispatch({ type : FETCH_COURSE_ALL, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const createCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.createCourse(course);
        dispatch({ type : CREATE_COURSE, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

export const updateCourse = (id, course) => async (dispatch) => {
    try {
        const { data } = await api.updateCourse(id, course);
        dispatch({ type : UPDATE_COURSE, payload: data});
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

