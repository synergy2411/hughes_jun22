import React from 'react';

const ChildTwo = (props) => {
    console.log("CHILD TWO");
    const sortedNumbers = props.numbers.sort()
    return (
        <div>
            <p>Child Two Component</p>
            <ul>
            {sortedNumbers.map((num,i) => <li key={i}>{num}</li>)}
            </ul>
        </div>
    );
}

export default React.memo(ChildTwo);
