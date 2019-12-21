import React, { Component } from 'react';
import './App.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react application</h1>
        <Person  name="Rishabh" age="28"/>
        <Person  name="Rishabh 1" age="29">My Hobbies are Playing Golf</Person>
        <Person  name="Rishabh 2" age="30"/>
      </div>
    );
  }
}

export default App;
