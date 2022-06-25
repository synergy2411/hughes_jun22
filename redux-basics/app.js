// CommonJS Import
const redux = require("redux");
// ES6 Import
// import redux from 'redux';


const initialState = {
    counter : 0
}

// Reducer

function reducerFn(state = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "ADD_COUNTER"){
        return {
            counter : state.counter + action.value
        }
    }
    return state;
}


// Store
const store = redux.createStore(reducerFn)

console.log("INITIAL STATE : " , store.getState())


// Actions
store.dispatch({type : "INCREMENT"})
console.log("AFTER INCREMENT : " , store.getState())

store.dispatch({type : "ADD_COUNTER", value : 10})
console.log("AFTER ADD_COUNTER : " , store.getState())
// Subscription
