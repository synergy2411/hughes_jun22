import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as goalActions from '../../../store/actions/goalActions';


const Goal = (props) => {

    const dispatch = useDispatch()

    let comments = useSelector(state => state.commentReducer.comments);

    comments = comments.filter(comment => comment.goalId === props.id)

    return (
        <li className='list-group-item'>
            <p>
                {props.title.toUpperCase()}
                <span className='float-right'>
                    <button onClick={() => dispatch({ type: goalActions.DELETE_GOAL, payload: props.id })}
                        className='btn btn-danger btn-sm'>Delete</button>
                </span>
            </p>
            <ul className='list-group'>
                {comments.map(comment => <li className='list-group-item'
                    key={comment.id}>
                    {comment.text} -
                    <button onClick={
                        () => dispatch({ type: goalActions.DELETE_COMMENT, payload: comment.id })}
                        className='btn btn-light btn-sm'>Delete</button></li>)}
            </ul>
        </li>
    );
}

export default Goal;
