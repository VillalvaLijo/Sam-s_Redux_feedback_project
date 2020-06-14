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
const understandingReducer = (state= [], action) =>{
    //put understanding in Redux state
    if(action.type === "GET_UNDERSTANDING"){
        console.log("Inside understandingReducer payload: ", action.payload);
        return action.payload
    }
    return state;
}

//write a reducer for the support page
const supportReducer = (state= [], action) =>{
    //put support input in Redux state
    if(action.type === "GET_SUPPORT"){
        console.log("Inside supportReducer payload: ", action.payload);
        return action.payload
    }
    return state;
}
//write a reducer for the comments page
const commentsReducer = (state=[], action) =>{
    //put comments in Redux State
    if (action.type === "ADD_COMMENTS"){
        console.log("Inside commentsReducer, payload:", action.payload);
        return action.payload
    }
    return state;
}

//combine all the elements of the feedback to be passed back to the POST request at
//feedback.routes.js



//create store instance to store states across the project using redux
const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
);


//wrap app in a Provider
ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
