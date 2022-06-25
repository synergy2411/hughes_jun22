import * as goalActions from '../actions/goalActions';

const initialState = {
    goals : [
        {id : "G001", title : "Run 5 miles", status : false},
        {id : "G002", title : "Lucky day today", status : true},
        {id : "G003", title : "kickking", status : false},
    ],
    comments : [
        { id: "C001", text : "Love it", goalId : "G001"},
        { id: "C002", text : "Like it", goalId : "G002"},
        { id: "C003", text : "It was awesome", goalId : "G001"},
        { id: "C004", text : "Helping me a lot", goalId : "G003"},
    ]
}

export function rootReducer (state = initialState, action) {
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
            const duplicateComments = state.comments.filter(comment => comment.goalId !== action.payload)
            return {
                ...state,
                goals : duplicateGoals,
                comments : duplicateComments
            }
        }
        case goalActions.DELETE_COMMENT:{
            const duplicateComment = state.comments.filter(comment => comment.id !== action.payload)
            return {
                ...state,
                comments : duplicateComment
            }
        }
        default:
            return state;
    }
}