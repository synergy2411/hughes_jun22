import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import * as goalActions from '../../../store/actions/goalActions';

const AddGoal = () => {
    const inputGoalRef = useRef(null)
    const dispatch = useDispatch();

    const addGoalHandler = (event) => {
        event.preventDefault();
        let newGoal = {
            id : v4(),
            title : inputGoalRef.current.value,
            status : false
        }
        dispatch({type : goalActions.ADD_GOAL , payload : newGoal })
    }
    return (
        <div className='row'>
            <div className='col-6 offset-1'>
                <input type="text" className="form-control" ref={inputGoalRef} />
            </div>
            <div className='col-4'>
                <button className="btn btn-dark" onClick={addGoalHandler}>Add Goal</button>
            </div>
        </div>
    );
}

export default AddGoal;
