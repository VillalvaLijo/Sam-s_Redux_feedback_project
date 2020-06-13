//import dependencies onto page
import React from 'react';
import {Component} from 'react';

class Submitted extends Component{

    //create a handleClick function to navigate back to the home page
    handleClick = () => {
        this.props.history.push('/');
    }    
    render(){
        return(
            <div>
                <h1>Thank You</h1>
                <button onClick = {this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}

export default Submitted;