//import dependencies onto page
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class Review extends Component{

    //with submitFeedback function send the feedback to the database and navigate to the next page
    submitFeedback = () =>{
        this.props.history.push('/submissionpage');
    }
    render(){
        return(
            <div>
                <h1>Review Your FeedBack</h1>
                <h3>Feelings: </h3>
                <h3>Understanding: </h3>
                <h3>Support: </h3>
                <h3>Comments: </h3>
                <button onClick = {this.submitFeedback}>Submit</button>
            </div>
        )
    }
}

export default connect()(Review);