import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles/index.css';
import './styles/fonts.css';

import App from './components/App';
import LocalStorage from './localStorage';
import { AUTH_USER } from './types/auth.types';

const Router = window.require ? MemoryRouter : BrowserRouter;

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
