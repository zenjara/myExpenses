import {
    FETCH_EXPENSES,
    NEW_EXPENSE,
    RESET_SUBMITTING_EXPENSE,
    SUBMITTING_EXPENSE

} from '../actions/types';

export default function(state = { expensesList: [], nextPage: 1, pagesTotal: 0, submittingExpense: false }, action) {
    switch(action.type) {
        case FETCH_EXPENSES:
            const { items, page, pages } = action.payload;
            return { expensesList: [ ...state.expensesList, ...items], nextPage: page + 1, pagesTotal: pages };
        case NEW_EXPENSE:
            return { ...state, expensesList: [ action.payload, ...state.expensesList ] };
        case SUBMITTING_EXPENSE:
            return { ...state, submittingExpense: true };
        case RESET_SUBMITTING_EXPENSE:
            return { ...state, submittingExpense: false };
        default:
            return state;
    }
}