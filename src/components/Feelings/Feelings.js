//import dependencies
import React from 'react';
//import connect from redux in order to make global variables.
import {connect} from 'react-redux';
import {Component} from 'react';

class Feelings extends Component{

    render(){
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <div id='feelingInput'>
                    <p>Feeling:</p>
                <NumericInput min={0} max={5} value={1}/>
                <button >Next</button>
                </div>


            </div>
        )
    }

}


export default connect()(Feelings);

