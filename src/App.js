import React, { Component } from 'react';
import './App.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react application</h1>
        <Person />
      </div>
    );
  }
}

export default App;
