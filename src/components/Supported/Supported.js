//import dependencies onto page
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
//import Numeric Input in order to have numeric input on form
import NumericInput from 'react-numeric-input';


class Supported extends Component{
    //create a local state to hold support input from the numeric form
    state={
        support: 0 //initialize support property to zero as a placeholder.
    }

    //create a function to update local state with the numeric input
    //this function is dynamically called ever time the input field for the numeric input is changed.
    updateSupport = (valueAsNumber) =>{
        console.log("Inside updateSupport, ", valueAsNumber);
        //update local state with input from the numeric form
        this.setState({
            support: valueAsNumber
        })
    }

    //create a function to send the support input of the numeric form to the support reducer
    // in index.js on the click of the next button
    submitSupport = () =>{
        //use a variable to grab input from the numeric form
        this.props.dispatch({
            type: "GET_SUPPORT",
            payload: this.state.support
        })
    }


    //create a function to route to the next page (Comments) on the click of the next button
    nextClick = () => {
        this.submitSupport();
        this.props.history.push('/comments');
    }

    render(){
        return(
            <div>
                <form>
                <h1>How well are you being supported?</h1>
                <NumericInput min={0} max={5} onChange = {this.updateSupport}/>
                <button type = 'button' onClick = {this.nextClick}>Next</button>
                </form>
            </div>
        )
    }
}

export default connect()(Supported);