//import dependencies
import React from 'react';
//import connect from redux in order to make global variables.
import {connect} from 'react-redux';
import {Component} from 'react';
//import NumericInput from react-numeric-input in order to use it in your input form
import NumericInput from 'react-numeric-input';

class Feelings extends Component{
    //create a local state to hold feelings input from the numeric form
    state={
        feelings: 0, //initialize feeling property to zero as a placeholder.
        inputValue: false //keep a tab of wether the user has entered feedback or not.
    }

    //create a function to update local state with the numeric input
    //this function is dynamically called ever time the input field for the numeric input is changed.
    updateFeelings = (valueAsNumber) =>{
        console.log("Inside updateFeelings, ", valueAsNumber);
        //update local state with input from the numeric form
        this.setState({
            feelings: valueAsNumber,
            inputValue: true
        })
    }

    //create a function to send the feelings input of the numeric form to the feelings reducer
    // in index.js on the click of the next button
    submitFeelings = () =>{
        //use a variable to grab input from the numeric form
        let feelings = this.state.feelings//input from numeric form

    
        this.props.dispatch({
            type: "GET_FEELINGS",
            payload: feelings
        })
    }

    //create a function to route to the next page (understanding) on the click of the next button
    nextClick = () => {
        //this.updateFeelings();
        //require inputValue to be true or else throw an alert to prompt the user to enter input
        if(this.state.inputValue==true){
            this.submitFeelings(); //call submitFeelings on button click
            this.props.history.push('/understanding');
        }
        else{
            alert("No Feedback entered, please enter feedback")
        }
        
    }

    
    render(){
        return (
    
            <div>
                <h1>How are you feeling today?</h1>
                <form id='feelingInputForm'>
                    <p>Feeling:</p>
                <NumericInput min={0} max={5} onChange = {this.updateFeelings}/>
                <button type= 'button' onClick = {this.nextClick}>Next</button>
                </form>


            </div>
            
        )
    }

}

export default connect()(Feelings);

