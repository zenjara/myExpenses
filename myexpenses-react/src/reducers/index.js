import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import userReducer from './userReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    expenses: expensesReducer
});

export default rootReducer;