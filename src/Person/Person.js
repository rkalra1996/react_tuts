import React from 'react';
// functional component
const person = (props) => {
    // This is stateless component as it does not use internal state
    // NOTE : since this is a functional component, it will have one argument, names props here, which will
    // have all the properties provided in the component (like attributes, html etc).
    // In case of class based components, this.props is by default available, you don't need to provide it seperately
    // App component is example of class based component
    return (
<p onClick={props.click}>I am {props.name} and i am {props.age} years old {props.children ? 'and ' + props.children : ''}</p>
    );
}

export default person;