import {
    FETCH_EXPENSES
} from '../actions/types';

export default function(state = { expensesList: [], nextPage: 1, pagesTotal: 0 }, action) {
    switch(action.type) {
        case FETCH_EXPENSES:
            const { items, page, pages } = action.payload;
            return { expensesList: [ ...state.expensesList, ...items], nextPage: page + 1, pagesTotal: pages };
        default:
            return state;
    }
}