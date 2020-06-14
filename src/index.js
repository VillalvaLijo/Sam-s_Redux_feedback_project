import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import redux components
import { createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'

//write a reducer for feelings page
const feelingsReducer = (state= [], action) =>{
    //put feedback in Redux state
    if(action.type === "GET_FEELINGS"){
        console.log("Inside feelingsReducer payload: ", action.payload);
        return action.payload
    }
    return state;
}


//write a reducer for understanding page

//write a reducer for the support page

//write a reducer for the comments page

//combine all the elements of the feedback to be passed back to the POST request at
//feedback.routes.js



//create store instance to store states across the project using redux
const storeInstance = createStore(
    combineReducers({
        feelingsReducer
    }),
);


//wrap app in a Provider
ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
