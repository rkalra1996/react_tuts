import React, { Component } from 'react';
import classes from './App.module.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
class App extends Component {
  // This is stateful component as it is using some form of state
  // all components, whether functional or class based, have a special property called state
  // this state helps to manage data from within the component unlike supplying data from outside the component

  /**
   * Class based ccomponents have access to lifecycle hooks. LifeCycle hooks are different form react hooks
   * The Sequence of lifecycle hooks that trigger on creation are 
   * 1. Constructor
   * 2. getDerivedStateFromProps
   * 3. render
   * 4. componentWillMount
   * 5. componentDidMount
   * 
   * Usage has been shown below
   */

   constructor() {
     // if you are calling a constructor, super is mandatory
     super();
     console.log('[App.js] constructor');
    this.state = {
      persons: [
        {name: 'Rishabh 1', age: 20},
        {name: 'Rishabh 2', age: 30},
        {name: 'Rishabh 3', age: 40}
      ],
      showPersons : false,
    }
   }

   // for getDerivedStateFromProps, use static
   static getDerivedStateFromProps(props, state) {
     // the function should always return a state, even a modified one
     console.log('[App.js] getDerivedStateFromProps');
     return state;
   }

  deletePerson = (personIndex) => {
    // delete the current clicked person
    const persons = [...this.state.persons];
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

  /* componentWillMount() {
    // This ifecycle hook is now deprecated from 16.3 onwards
    console.log('[App.js] component will mount');
  } */

  componentDidMount() {
    console.log('[App.js] component did mount')
  }
  render() {
    console.log('[App.js] render');
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
