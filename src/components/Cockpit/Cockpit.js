import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        // this basically gets called on every render cycle of functional component
        // this means it will be called whenever a connected update functionality is triggered
        // this will also get triggered the first time component is created
        // this REACT HOOK is usefull to perform side effect functionality
        console.log('[Cockpit.js] useEffect');
    });
    console.log('[Cockpit.js] render')
    return (
        <div>
            <h1>Hi I am a react application</h1>
            <div className={classes.btnContainer}>
                <button className={classes.normalBtn} onClick={props.togglePersons} disabled={props.persons.length < 1 ? true : false}>Toggle Persons</button>
            </div>
        </div>
    )
}

export default Cockpit;
