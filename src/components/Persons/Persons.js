import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    // a functional component which will return person list
    return (
        <div className="personContainer">
          {
            props.persons.map((person, index) => {
              return <Person 
              click={props.deletePerson.bind(this, index)}  
              name={person.name} 
              age={person.age} 
              key={index}/>
            })
          }
        </div>
      );
}

export default persons;