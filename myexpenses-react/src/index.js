import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './components/App';
import reducers from './reducers';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import LocalStorage from './utils/localStorage';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const accessToken = LocalStorage.getAccessToken();
if(accessToken) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
