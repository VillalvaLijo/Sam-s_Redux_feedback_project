import React, { Component } from 'react';
import axios from 'axios';
//import the hash router from react-router-dom in order to switch inbetween commponents by url path
import { HashRouter as Router, Route, Link} from 'react-router-dom'; 
import './App.css';
//import components from JS pages in order to link the routes.
import Feelings from '../Feelings/Feelings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <section>
          {/* establish routes for all the feedback pages */}
          <Router>
            {/* create an intial landing page to greet the user */}
            <div id="inital landing page">
              <p>Please enter your feedback for the day, in order that we may better understand your needs and serve you</p>
             {/* Wrap button tag inside of a Link tag in order to call link on button click*/}
             <Link to = '/feelings'><button >Begin Feedback</button></Link>
            </div>
            {/* Route to different components */}
            <Route path='/feelings' component={Feelings}/>
            {/* <Route path='/comments' component={Comments}/> */}
          </Router>

        </section>
      </div>
    );
  }
}

export default App;
