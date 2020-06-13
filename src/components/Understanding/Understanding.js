//import dependencies 
import React from 'react';
import {Component} from 'react';
//import Numeric Input in order to have numeric input on form
import NumericInput from 'react-numeric-input';

class Understanding extends Component {
    

    render(){
        return (
            <form>
                <h1>How well do you understand the material?</h1>
                <NumericInput min={0} max={5} value={1}/>
                <button>Next</button>
            </form>

        )
    }
}

export default Understanding;