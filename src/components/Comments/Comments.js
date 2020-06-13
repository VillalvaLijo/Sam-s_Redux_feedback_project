//import dependencies onto page
import React from 'react';
import {Component} from 'react';

class Comments extends Component {

    //create a function to route to the next page (Review Page) on the click of the next button
    nextClick = () => {
        this.props.history.push('/review');
    }


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

export default Comments;
