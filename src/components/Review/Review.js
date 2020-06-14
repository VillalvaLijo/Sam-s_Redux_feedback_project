//import dependencies onto page
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class Review extends Component{
    componentDidMount =() =>{
        console.log("this.reduxStore", this.props.reduxStore.feelingsReducer.feelings);
    }
    //with submitFeedback function send the feedback to the database and navigate to the next page
    submitFeedback = () =>{
        //grab submission time on button click with Date()
        //var submissionDate = Date();
        //create a feedback object of all the information from the redux store reducers in order to pass
        //the data server side with a post request
        const feedbackObject = {
            feelings: this.props.reduxStore.feelingsReducer,
            understanding: this.props.reduxStore.understandingReducer,
            support: this.props.reduxStore.supportReducer,
            comments: this.props.reduxStore.commentsReducer,
            //flagged: false,
            //submissionDate: submissionDate
        }

        //write a post request that post info to the database
        Axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedbackObject
        }).then((response) => {
            console.log('response', response)
        }).catch((error) => {
            console.log("error with axios Post", error);
        })

        //
        this.props.history.push('/submissionpage');
    }
    render(){
        return(
            <div>
                <h1>Review Your FeedBack</h1>
                {/* <h3>{JSON.stringify(this.props.reduxStore)}hi </h3> */}
                <h3>Feelings: {this.props.reduxStore.feelingsReducer}</h3>
                <h3>Understanding: {this.props.reduxStore.understandingReducer}</h3>
                <h3>Support: {this.props.reduxStore.supportReducer}</h3>
                <h3>Comments: {this.props.reduxStore.commentsReducer}</h3>
                <button onClick = {this.submitFeedback}>Submit</button>
            </div>
        )
    }
}

//import reduxStore from index.js and put it on props
const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Review);