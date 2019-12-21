import React, { Component } from 'react';
import './App.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Person from './Person/Person';

class App extends Component {
  // all components, whether functional or class based, have a special property called state
  // this state helps to manage data from within the component unlike supplying data from outside the component
  state = {
    persons: [
      {name: 'Rishabh 1', age: 20},
      {name: 'Rishabh 2', age: 30},
      {name: 'Rishabh 3', age: 40}
    ]
  }

  switchNameHandler = () => {
    // switch the names of person present inside state
    this.setState({
      persons: [
        {name: 'Rishabh Kalra', age: 20},
        {name: 'Rishabh 2', age: 35},
        {name: 'Rishabh 3', age: 40}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react application</h1>
        <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies are Playing Golf</Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        {/**
         * NOTE : there are no () after the function call. This is because ifyou provide parenthesis, it will be called immediately
         * and will result into errors. Since it has to be called later on, we are just passing the reference of the function
         * rather than calling it immediately
         */}
        <button onClick={this.switchNameHandler}>Click to Switch</button>
      </div>
    );
  }
}

export default App;
