import { SET_BULLETIN_ID, RESET_BULLETIN_ID } from '../constants/currentBulletinType'

const reducer = (user=[], action) => {
    switch (action.type){
        case SET_BULLETIN_ID:
            return action.payload;

        case RESET_BULLETIN_ID:
            return [];

        default:
            return user;
    }
}

export default reducer;