import {
    AUTH_USER,
    UNAUTH_USER,
    LOGGING_USER,
    RESET_LOGGING_USER
} from "../actions/types";

export default function(state = { authenticated: false }, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        case LOGGING_USER:
            return { ...state, logging: true };
        case RESET_LOGGING_USER:
            return { ...state, logging: false };
        default:
            return state;
    }
}