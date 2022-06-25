export const logger = store => next => action => {
    console.log("ACTION : ", action);
    console.log("STATE :", store.getState());
    return next(action)
}

// function loggerTwo (store){
//     return function(next){
//         return function(action){

//         }
//     }
// }