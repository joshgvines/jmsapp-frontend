import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sent from './components/Sent';
import Send from './components/Send';
import Home from './components/Home';
import Inbox from './components/Inbox'

class App extends Component {

  render () {
    return (

      <Router>

        <div className="App">

          <Navbar />

          <Route exact path="/" component={ Home  } />
          <Route path="/sent"   component={ Sent  } />
          <Route path="/send"   component={ Send  } />
          <Route path="/inbox"  component={ Inbox } />

        </div>

      </Router>

    );
  }
}

export default App;
