import { SET_MY_USER } from '../constants/myUserActionType'

const reducer = (user=[], action) => {
    switch (action.type){
        case SET_MY_USER:
            return action.payload;

        default:
            return user;
    }
}

export default reducer;