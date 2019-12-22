import React, { Component } from 'react';
import './App.css';
// importing a componenet with capital name , because jsx knows it is custom and not native one
import Person from './Person/Person';
import Person2 from './Person2/Person2';

// To solve the issue of pseudo-elements when writing inline style like the style object below, there is a package 'radium'
// It allows you to write pseudo-css and media queries within JS.
import Radium from 'radium';

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
    return (
      <div className="personContainer">
        {
          this.state.persons.map((person, index) => {
            return <Person click={this.deletePerson.bind(this, index)}  name={person.name} age={person.age} key={index}/>
          })
        }
      </div>
    );
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
    const buttonStyle = {
      minWidth: '100px',
      font: 'inherit',
      cursor: 'pointer',
      backgroundColor: 'green',
      padding: '10px',
      color: 'white',
      border: 'none',
      ':hover': {
        backgroundColor: 'orange'
      },
      ':disabled': {
        backgroundColor: 'red',
      }
    }

    // since the render function is called everytime a change occurs, we can take advantage of it
    let persons = null;
    if (this.state.showPersons) {
      persons = this.getPersons();
    }
    return (
      <div className="App">
        <h1>Hi I am a react application</h1>
        <div className="btnContainer">
          <button style={buttonStyle} key="toggleBtnKey" onClick={this.togglePersons} disabled={this.state.persons.length < 1 ? true : false}>Toggle Persons</button>
        </div>
        {
          // displaying the persons list if the showPerson is true. The persons variable is JSX element so it will render appropriately
        persons
        }
        {/**
         * NOTE : there are no () after the function call. This is because ifyou provide parenthesis, it will be called immediately
         * and will result into errors. Since it has to be called later on, we are just passing the reference of the function
         * rather than calling it immediately
         */}
         <div className="btnContainer">
           {
           //NOTE : since radium is being used and we have used same set of style object in multiple elements, we need to make these elements
           // unique by passing a unique key attribute / ref attribute. Concept is similar to for loop in JSX
           }
          <button style={buttonStyle} key="switchBtnKey" onClick={this.switchNameHandler}>Click to Switch</button>
         </div>
        <Person2 />
      </div>
    );
  }
}

export default Radium(App);
