import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { UNAUTH_USER } from "../actions/types";

import authReducer from './authReducer';
import userReducer from './userReducer';
import limitsReducer from './limitsReducer';
import expensesReducer from './expensesReducer';
import categoriesReducer from "./categoriesReducer";
import currencyReducer from './currencyReducer';

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    limits: limitsReducer,
    expenses: expensesReducer,
    categories: categoriesReducer,
    currencies: currencyReducer
});

const rootReducer = (state, action) => {
    if(action.type === UNAUTH_USER) {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;