import React, { Component } from 'react';
import axios from 'axios';
//import the hash router from react-router-dom in order to switch inbetween commponents by url path
import { HashRouter as Router, Route, Link} from 'react-router-dom'; 
import './App.css';
//import components from JS pages in order to link the routes.
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'
import Submitted from '../SubmissionPage/SubmissionPage';
import Home from '../Home/Home';

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
            {/* Create a home page route */}
            <Route exact path= "/" component={Home}/>
            {/* Route to different components */}
            <Route path='/feelings' component={Feelings}/>
            {/* Understanding must be imported here in order for it to be accesed by 
            props.history in Feelings.js */}
            <Route path='/understanding' component={Understanding}/>
            <Route path='/supported' component={Supported}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/review' component={Review}/>
            <Route path='/submissionpage' component={Submitted}/>
          </Router>

        </section>
      </div>
    );
  }
}

export default App;
