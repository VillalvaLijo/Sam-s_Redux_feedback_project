//import dependencies 
import React from 'react';
import {Component} from 'react';
//import Numeric Input in order to have numeric input on form
import NumericInput from 'react-numeric-input';

class Understanding extends Component {
    

    //create a function to route to the next page (Supported) on the click of the next button
    nextClick = () => {
        this.props.history.push('/supported');
    }


    render(){
        return (
            <form>
                <h1>How well do you understand the material?</h1>
                <NumericInput min={0} max={5} value={1}/>
                <button onClick = {this.nextClick}>Next</button>
            </form>

        )
    }
}

export default Understanding;