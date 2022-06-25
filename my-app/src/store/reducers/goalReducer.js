import * as goalActions from '../actions/goalActions';

const initialState = {
    goals : [
        {id : "G001", title : "Run 5 miles", status : false},
        {id : "G002", title : "Lucky day today", status : true},
        {id : "G003", title : "kickking", status : false},
    ]
}

export function goalReducer (state = initialState, action) {
    switch (action.type) {
        case goalActions.ADD_GOAL:{
            return {
                ...state,
                goals : [ action.payload, ...state.goals]
            }
        }
        case goalActions.DELETE_GOAL :{
            // write your complex state change logic
            const duplicateGoals = state.goals.filter(goal => goal.id !== action.payload)
            // const duplicateComments = state.comments.filter(comment => comment.goalId !== action.payload)
            return {
                ...state,
                goals : duplicateGoals,
                // comments : duplicateComments
            }
        }
        default:
            return state;
    }
}