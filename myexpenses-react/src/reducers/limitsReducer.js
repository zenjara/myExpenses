import {
    FETCH_LIMITS
} from '../actions/types';

export default function(state = { limitsSet: false }, action) {
    switch(action.type) {
        case FETCH_LIMITS:
            return { ...state,  ...action.payload, limitsSet: true };
        default:
            return state;
    }
}