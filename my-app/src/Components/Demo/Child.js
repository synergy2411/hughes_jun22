import React from 'react';

const Child = (props) => {
    console.log("CHILD COMPONENT");
    return (
        <div>
            <p>The Child Component</p>
            {props.show && <p>This paragraph will toggle</p>}
        </div>
    );
}

export default React.memo(Child);


// props.show === props.prev.show => false
// false === false

// props.handlerFn === props.prev.handlerFn         => 
// if true, Child comp should not re-render 
// if false, Child comp will re-render