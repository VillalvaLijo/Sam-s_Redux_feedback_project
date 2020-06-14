//import dependencies onto page
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    //create a local state to hold input from the user
    state={
        comments: '' // initalize state as an empty string to place comments in later.
    }

    updateComments = (event) =>{
        console.log("inside update comments: ", event.target.value);
        //update local state to hold comments
        this.setState({
            comments: event.target.value
        })
    }

    //create functio to send comments to the comment reducer in index.js
    addComments = () => {
        this.props.dispatch({
            type: "ADD_COMMENTS",
            payload: this.state.comments
        })
    }
    //create a function to route to the next page (Review Page) on the click of the next button
    nextClick = () => {
        this.addComments()
        this.props.history.push('/review');
    }


    render(){
        return(
            <form >
                <h1>Any comments you want to leave?</h1>
                <label>Comments:
                    <input type="text" onChange = {this.updateComments}/>
                </label>
                <button type = "button" onClick={this.nextClick}>Next</button>
            </form>
        )
    }
}

export default connect()(Comments);
