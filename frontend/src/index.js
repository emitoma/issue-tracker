import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/redux/store';

import App from './components/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
