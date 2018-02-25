import {
    AUTH_USER,
    UNAUTH_USER,
    LOGGING_USER,
    RESET_LOGGING_USER
} from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case LOGGING_USER:
            return { ...state, logging: true };
        case RESET_LOGGING_USER:
            return { ...state, logging: false };
        default:
            return state;
    }
}