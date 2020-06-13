import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import redux components
import { createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'

//create store instance to store states across the project using redux
const storeInstance = createStore(
    combineReducers({

    }),
);


//wrap app in a Provider
ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
