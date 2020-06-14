//import dependencies 
import React from 'react';
import {Component} from 'react';
//import Numeric Input in order to have numeric input on form
import NumericInput from 'react-numeric-input';
import {connect} from 'react-redux';

class Understanding extends Component {
    //create a local state to hold the value of understanding.
    state = {
        understanding: 0 //intialize property understanding of local state to zero asa placeholder.
    }

    //create a function to update local state with the numeric input
    //this function is dynamically called ever time the input field for the numeric input is changed.
    updateUnderstanding = (valueAsNumber) =>{
        console.log("Inside updateUnderstanding, ", valueAsNumber); //tried event.target.value, event.target.valueAsNumber
        //update local state with input from the numeric form
        this.setState({
            understanding: valueAsNumber
        })
    }

    //create a function to send the understanding input of the numeric form to the understanding reducer
    // in index.js on the click of the next button
    submitUnderstanding = () =>{
        //use a variable to grab input from the numeric form
        //let understanding = this.state.understanding//input from numeric form stored in local state
        this.props.dispatch({
            type: "GET_UNDERSTANDING",
            payload: this.state.understanding
        })
    }

    //create a function to route to the next page (Supported) on the click of the next button
    nextClick = () => {
        this.submitUnderstanding();
        this.props.history.push('/supported');
    }


    render(){
        return (
            <form>
                <h1>How well do you understand the material?</h1>
                <NumericInput min={0} max={5} onChange= {this.updateUnderstanding}/>
                <button type="button" onClick = {this.nextClick}>Next</button>
            </form>

        )
    }
}

export default connect()(Understanding);