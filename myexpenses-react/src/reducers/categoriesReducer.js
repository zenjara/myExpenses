import _ from 'lodash';
import {
    FETCH_CATEGORIES
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CATEGORIES:
            const categories = _.keyBy(action.payload, 'id');
            return { ...state, ...categories };
        default:
            return state;
    }
}