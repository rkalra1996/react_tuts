import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    
  render() {
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