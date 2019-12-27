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
        // Example, this function will be executed only once
        // Note that it WILL TRIGGER the first time as it is the default behaviour

        // You can even do cleanup using return in the same useEffect REACT HOOK as shown below
        console.log('[Cockpit.js] useEffect');

        // what to do when the component unmoounts
        // In this case it will trigger only once because we have passed empty array for render cycle as well
        return () => {
            console.log('[Cockpit.js] unmmounting called')
        }
    }, []);

    // you can even call multiple useEffect to control specific behaviours
    useEffect(() => {
        // This one will execute on every render cycle
        console.log('[Cockpit.js] useEffect2');
        return () => {
            // This will be called after every render cycle is finished, in short after every render, a new render cycle enbles, just before that
            console.log('[Cockpit.js] unmmounting2 called')
        }
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
