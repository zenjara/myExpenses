import {
    FETCH_USER,
    FETCH_LIMIT
} from '../actions/types';

export default function(state = { user: {}, limitSet: false }, action) {
    switch(action.type) {
        case FETCH_USER:
            console.log('user fetched');
            return { ...state, user: action.payload };
        case FETCH_LIMIT:
            return { ...state, limitSet: true };
        default:
            return state;
    }
}