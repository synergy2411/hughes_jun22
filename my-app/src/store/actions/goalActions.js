import { v4 } from "uuid"

export const ADD_GOAL = "ADD_GOAL"
export const DELETE_GOAL = "DELETE_GOAL"
export const DELETE_COMMENT = "DELETE_COMMENT"



// Async Action Creator using Thunk
export function asyncAddGoal(goalTitle){
    // Write Async Code here
    let newGoal = {
        id : v4(),
        title : goalTitle,
        status : false
    }
    return function(dispatch){
        setTimeout(() => {
            dispatch({
                type : ADD_GOAL,
                payload : newGoal
            })
        }, 1500)
    }
}


// Action Creator
export function addGoal(goalTitle){
    // write your own code
    let newGoal = {
        id : v4(),
        title : goalTitle,
        status : false
    }
    return {
        type : ADD_GOAL,
        payload : newGoal
    }
}