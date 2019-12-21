import React, {useState} from 'react';
// functional component
const Person2 = (props) => {
    // Demonstration of accessing states in functional components.
    // Few things to note about states in functional component
    // 1. You have to use useState hook to access states in functional components
    // 2. The useState hook returns an array with 2 parameters, first contains the state created and second the 
    //    function which will allow to modify the state
    // 3. The state DOES not merge the other properties automatically in state unlike the class based states.
    //    Either you have to merge them manually or maintain different states
    // 4. Functional states can be created multiple times unlike class based states which are creted once.
    const [personState, setPersonsState] = useState({
        persons : [
            {name: 'Rishabh 1', age: 20},
            {name: 'Rishabh 2', age: 30},
            {name: 'Rishabh 3', age: 40}
        ]
    });

    // creating state for another data seperately
    const [otherState, setOtherState] = useState({
        other: 'This is other state'
    });

    const incrementPerson2Age = (clickedPerson2Index) => {
        // increment the age of clicked person by 1
        const newPersonState = {...personState};
        newPersonState.persons[clickedPerson2Index].age += 1;
        setPersonsState({...newPersonState});
    }
    
    return (
        <div className="parent2">
            <p onClick={() => incrementPerson2Age(0)}>This is person2 with name {personState.persons[0].name} and age {personState.persons[0].age}</p>
            <p onClick={() => incrementPerson2Age(1)}>This is person2 with name {personState.persons[1].name} and age {personState.persons[1].age}</p>
            <p onClick={() => incrementPerson2Age(2)}>This is person2 with name {personState.persons[2].name} and age {personState.persons[2].age}</p>
        </div>
    );
}

export default Person2;