import {
    FETCH_USER,
    FETCH_TOTAL_EXPENSES
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_USER:
            return { ...state, ...action.payload };
        case FETCH_TOTAL_EXPENSES:
            const { expensesDailyTotal, expensesMonthlyTotal } = action.payload;
            return { ...state, expensesDailyTotal: expensesDailyTotal.amount, expensesMonthlyTotal: expensesMonthlyTotal.amount };
        default:
            return state;
    }
}