import {
    FETCH_USER
} from '../actions/types';

export default function(state = { user: {} }, action) {
    switch(action.type) {
        case FETCH_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}