import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import userReducer from './userReducer';
import limitsReducer from './limitsReducer';
import expensesReducer from './expensesReducer';
import categoriesReducer from "./categoriesReducer";
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    limits: limitsReducer,
    expenses: expensesReducer,
    categories: categoriesReducer,
    currencies: currencyReducer
});

export default rootReducer;