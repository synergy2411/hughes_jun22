import React, { useState, useCallback } from 'react';
import Child from './Child';

const DemoUseCallback = () => {
    const [show, setShow] = useState(true);
    const [display, setDisplay ] = useState(true);

    console.log("DEMO USE CALLBACK")

    const handlerFunction = useCallback(() => {
        if(display){
            console.log("Handler Function")
        }
    }, [display])

    return (
        <div>
            <h5>The Demo Callback</h5>
            <button onClick={() => setShow(!show)}>Toggle Show</button>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            <Child show={false} handlerFunction={handlerFunction} />
        </div>
    );
}

export default DemoUseCallback;
