import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
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

export default cockpit;
