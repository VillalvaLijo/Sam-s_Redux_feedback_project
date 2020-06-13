//import dependencies onto page
import React from 'react';
import {Component} from 'react';
//import Numeric Input in order to have numeric input on form
import NumericInput from 'react-numeric-input';


class Supported extends Component{


    render(){
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <NumericInput min={0} max={5} value={1}/>
                <button onClick = {this.nextClick}>Next</button>
            </div>
        )
    }
}

export default Supported;