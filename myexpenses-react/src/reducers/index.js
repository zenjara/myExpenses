import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import userReducer from './userReducer';
import expensesReducer from './expensesReducer';
import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    expenses: expensesReducer,
    currencies: currencyReducer
});

export default rootReducer;