import { FETCH_USER_ALL, CREATE_USER, UPDATE_USER} from '../constants/usersActionType';


const reducer = (users=[], action) => {
    switch (action.type){
        case FETCH_USER_ALL:
            return action.payload;

        case CREATE_USER:
            return [...users, action.payload];

        case UPDATE_USER:
            return users.map((user) => user._id === action.payload._id ? action.payload : user);

        default:
            return users;
    }
}

export default reducer;