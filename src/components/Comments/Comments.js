//import dependencies onto page
import React from 'react';
import {Component} from 'react';

class Comments extends Component {


    render(){
        return(
            <form >
                <h1>Any comments you want to leave?</h1>
                <label>Comments:
                    <input type="text"/>
                </label>
                <button onClick={this.nextClick}>Next</button>
            </form>
        )
    }
}