import _ from 'lodash';
import {
    FETCH_CURRENCY
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CURRENCY:
            const currencies = _.keyBy(action.payload, 'id');
            return { ...state, ...currencies };
        default:
            return state;
    }
}