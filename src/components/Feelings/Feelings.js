//import dependencies
import React from 'react';
//import connect from redux in order to make global variables.
//connect is our provider from react-redux so the entire component needs to be wrapped by connect 
//otherwise we will get the error saying that component needs to be wraped by a <Provider>
//import {connect} from 'react-redux';
import {Component} from 'react';
//import NumericInput from react-numeric-input in order to use it in your input form
import NumericInput from 'react-numeric-input';

class Feelings extends Component{

    //create a function to route to the next page (understanding) on the click of the next button
    nextClick = () => {
        this.props.history.push('/understanding');
    }

    //wrap compoenent in a provider
    render(){
        return (
            //connect is a placeholder for the redux provider that holds redux state.
            <connect>
            <div>
                <h1>How are you feeling today?</h1>
                <form id='feelingInputForm'>
                    <p>Feeling:</p>
                <NumericInput min={0} max={5} value={1}/>
                <button onClick = {this.nextClick}>Next</button>
                </form>


            </div>
            </connect>
        )
    }

}

// const mapStateToProps = (reduxStore) => ({ reduxStore})

// export default connect(mapStateToProps)(Feelings);

//compiled without redux state
export default Feelings;

