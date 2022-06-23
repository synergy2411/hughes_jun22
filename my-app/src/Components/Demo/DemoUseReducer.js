import React, { useReducer } from 'react';

const initialState = {
    counter : 0,
    result : []
}

const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            counter : state.counter - 1
        }
    }else if(action.type === "ADD"){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }else if(action.type === "STORE_RESULT"){
        return {
            ...state,
            result : [state.counter, ...state.result]
        }
    }
    return state
}

const DemoUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3> Use Reducer Demo </h3>
            <p className='display-4'>Counter : {state.counter}</p>
            <hr/>
            <div className='btn btn-group'>
                <button className='btn btn-primary' 
                    onClick={() => dispatch({type:"INCREMENT"})}>Increase</button>
                <button className='btn btn-dark' 
                    onClick={() => dispatch({type : "DECREMENT"})}>Decrease</button>
                <button className='btn btn-success'
                    onClick={() => dispatch({type : "ADD", value : 10})}>Add (10)</button>
            </div>
            <hr />
            <button className='btn btn-warning' 
                onClick={() => dispatch({type : "STORE_RESULT"})}>STORE RESULT</button>
            <ul className='list list-group'>
                {state.result.map((res, i) => <li className='list-group-item' key={i}>{res}</li>)}
            </ul>
        </div>
    );
}

export default DemoUseReducer;
