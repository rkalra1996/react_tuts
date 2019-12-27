import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        // this basically gets called on every render cycle of functional component
        // this means it will be called whenever a connected update functionality is triggered
        // this will also get triggered the first time component is created
        // this REACT HOOK is usefull to perform side effect functionality

        // The issue is its feature, to get triggered onevery render
        // but we can control it too.....
        // Example, this function will be executed only when persons variable changes
        // Note that it WILL TRIGGER the first time as it is the default behaviour
        setTimeout(() => {
            alert('hi');
        }, 1000)
        console.log('[Cockpit.js] useEffect');
    }, [props.persons]);
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
