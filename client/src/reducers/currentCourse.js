import { SET_COURSE_ID, RESET_COURSE_ID } from '../constants/currentCourseType'

const reducer = (user=[], action) => {
    switch (action.type){
        case SET_COURSE_ID:
            return action.payload;

        case RESET_COURSE_ID:
            return [];

        default:
            return user;
    }
}

export default reducer;