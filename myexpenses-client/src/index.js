import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Using HashRouter instead of BrowserRouter to get it working with
// deployment on a static server (surge.sh)
// Rollback to BrowserRouter when moving to a new deployment service
import { HashRouter, MemoryRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css';
import './styles/index.css';
import './styles/fonts.css';
import './styles/react_dates_overrides.css';

import App from './components/App';
import LocalStorage from './localStorage';
import { AUTH_USER } from './types/auth.types';

const Router = window.require ? MemoryRouter : HashRouter;

const accessToken = LocalStorage.getAccessToken();
if (accessToken) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
