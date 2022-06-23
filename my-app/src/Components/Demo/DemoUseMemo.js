import React, { useMemo, useState } from 'react';
import ChildTwo from './ChildTwo';

const DemoUseMemo = () => {
    const [show, setShow] = useState(false)
    console.log("USE MEMO COMP");

    const numbers = useMemo(() => {
        return [2, 4, 6, 8, 6, 2, 4];
    }, []) 

    return (
        <div>
            <p>Use Memo Component</p>
            <button onClick={() => setShow(!show)}>Change State</button>
            <ChildTwo numbers={numbers} />
        </div>
    );
}

export default DemoUseMemo;
