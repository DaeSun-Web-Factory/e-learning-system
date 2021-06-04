import {combineReducers} from 'redux';

import users from './users';
import myUser from './myUser';
import courses from './courses';

export default combineReducers({
    users, myUser, courses
});