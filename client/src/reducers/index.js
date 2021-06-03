import {combineReducers} from 'redux';

import users from './users';
import myUser from './myUser';

export default combineReducers({
    users, myUser,
});