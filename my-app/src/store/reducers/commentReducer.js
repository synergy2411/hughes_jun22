import * as goalActions from '../actions/goalActions';

const initialState = {
    comments : [
        { id: "C001", text : "Love it", goalId : "G001"},
        { id: "C002", text : "Like it", goalId : "G002"},
        { id: "C003", text : "It was awesome", goalId : "G001"},
        { id: "C004", text : "Helping me a lot", goalId : "G003"},
    ]
}

export function commentReducer (state = initialState, action) {
    switch (action.type) {
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