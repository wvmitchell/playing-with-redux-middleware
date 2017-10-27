import React, { Component } from 'react';
import { Route } from 'react-router';
import Counter from '../../containers/Counter'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Counter} />
      </div>
    );
  }
}

export default App;
