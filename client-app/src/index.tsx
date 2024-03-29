import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './layout/styles.css';
import App from './layout/App';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './stores/store';


ReactDOM.render(
  <StoreContext.Provider value={store} >
    <App />
    </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
