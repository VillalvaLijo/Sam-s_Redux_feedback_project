//import dependencies
import React from 'react';
//import connect from redux in order to make global variables.
import {connect} from 'react-redux';
import {Component} from 'react';
//import NumericInput from react-numeric-input in order to use it in your input form
import NumericInput from 'react-numeric-input';

class Feelings extends Component{

    render(){
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <form id='feelingInputForm'>
                    <p>Feeling:</p>
                <NumericInput min={0} max={5} value={1}/>
                <button >Next</button>
                </form>


            </div>
        )
    }

}


export default connect()(Feelings);

