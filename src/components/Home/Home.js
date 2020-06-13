//Create a home page to display when the user is brought onto the page

//import dependecies
import React from 'react';
import {Component} from 'react';

class Home extends Component{

    //function to handle click and send user to feelings page
    handleClick = () => {
        console.log("inside of handle click Home page")
        this.props.history.push('/feelings');
    }

    render(){
        return(
            //this will be displayed on the front page when the user goes to 
            //submit their feedback

            /* create an intial landing page to greet the user */
            <div id="inital landing page">
              <p>Please enter your feedback for the day, in order that we may better understand your needs and serve you</p>
             {/* Wrap button tag inside of a Link tag in order to call link on button click*/}
             <button onClick= {this.handleClick}>Begin Feedback</button>
            </div>

        )
    }
}

export default Home;