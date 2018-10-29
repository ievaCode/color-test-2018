import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import authReducer from './reducers/authReducer';
import colorReducer from './reducers/colorsReducer';
import activeColorReducer from './reducers/activeColorReducer';
import resultsReducer from './reducers/resultsReducer';

const rootReducer = combineReducers({
    auth:authReducer,
    colors: colorReducer,
    active: activeColorReducer,
    results: resultsReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
registerServiceWorker();










