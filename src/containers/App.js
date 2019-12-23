import React, { Component } from 'react';
import classes from './App.module.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
class App extends Component {
  // This is stateful component as it is using some form of state
  // all components, whether functional or class based, have a special property called state
  // this state helps to manage data from within the component unlike supplying data from outside the component
  state = {
    persons: [
      {name: 'Rishabh 1', age: 20},
      {name: 'Rishabh 2', age: 30},
      {name: 'Rishabh 3', age: 40}
    ],
    showPersons : false,
  }

  deletePerson = (personIndex) => {
    // delete the current clicked person
    // this is not the correct way because we are changing the state directly (mutation is bad)
    // const persons = this.state.persons;
    // correct way is below
    const persons = [...this.state.persons];
    // or const persons = this.state.persons.slice()
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  }

  getPersons = () => {
    // the function is returning JSX code. This is valid because under the hood its just plain js
    return <Persons 
    persons={this.state.persons} 
    deletePerson={this.deletePerson}/>
  }

  togglePersons = () => {
    const currentVisibility = this.state.showPersons;
    this.setState({
      showPersons: !currentVisibility
    })
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

    // since the render function is called everytime a change occurs, we can take advantage of it
    let persons = null;
    if (this.state.showPersons) {
      persons = this.getPersons();
    }
    return (
      <div className={classes.App}>
        <Cockpit togglePersons={this.togglePersons} persons={this.state.persons}/>
        {persons}
         <div className={classes.btnContainer}>
          <button className={classes.normalBtn} onClick={this.switchNameHandler}>Click to Switch</button>
         </div>
      </div>
    );
  }
}

export default App;
