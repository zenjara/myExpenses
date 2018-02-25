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

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
