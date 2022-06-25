import React from 'react';
import { useSelector  } from 'react-redux';
import AddGoal from './AddGoal/AddGoal';
import Goal from './Goal/Goal';

const Goals = () => {
    const goals = useSelector(state => {
        console.log(state);
        return state.goalReducer.goals});

    return (
        <div>
            <AddGoal />
            <hr />
            <ul className='list-group'>
                {goals && goals.map(goal => <Goal {...goal} key={goal.id}/>)}
            </ul>
        </div>
    );
}

export default Goals;
