import React, { Component } from 'react';

import classes from './Person.module.css';
// functional component
class Person extends Component {

    render() {
        console.log('[Person.js] render')
        return (
        <p className={classes.Person} onClick={this.props.click}>I am {this.props.name} and i am {this.props.age} years old {this.props.children ? 'and ' + this.props.children : ''}</p>
        );
    }
}

export default Person;