import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  state = {}

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this lifecycle hook works by allowing you to stop auto render cycle depending on a condition
    console.log('[Persons.js] should component update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] get snapshot update');
    // this hook is used to set final checks or sve minor data objects to be used later, no side effect code here
    // what you return from here is available in the componentDidUpdate hook
    return {message: 'Hi from the other side'};
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('[Persons.js] component did update', snapshot);
  }
    
  render() {
    console.log('[Persons.js] render');
    return (
      <div className="personContainer">
        {
          this.props.persons.map((person, index) => {
            return <Person 
            click={this.props.deletePerson.bind(this, index)}  
            name={person.name} 
            age={person.age} 
            key={index}/>
          })
        }
      </div>
    );
  }
}

export default Persons;