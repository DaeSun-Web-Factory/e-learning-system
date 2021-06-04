import { FETCH_COURSE_ALL, CREATE_COURSE, UPDATE_COURSE} from '../constants/coursesActionType';


const reducer = (courses=[], action) => {
    switch (action.type){
        case FETCH_COURSE_ALL:
            return action.payload;

        case CREATE_COURSE:
            return [...courses, action.payload];

        case UPDATE_COURSE:
            return courses.map((course) => course._id === action.payload._id ? action.payload : course);

        default:
            return courses;
    }
}

export default reducer;