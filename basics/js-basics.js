// console.log("Start")

// setTimeout(() => {
//     console.log("Timer")
// }, 0);

// Promise.resolve("Promise").then(result => console.log(result));

// console.log("End")


// OUTPUT -> Start -> End -> Promise -> Timer


// Sync Code
// Async Code
    // - MicroTask : Promise and QueueMicrotask()
    // - MacroTask : timer, XHR, Socket Reading/writing etc




// PROMISES

// function demoPromise(ms){
//     console.log("Demo Promise Start")
//     const promise = new Promise((resolve, reject) => {
//         if(ms < 3000){
//             setTimeout(() => {
//                 // resolve({message : "SUCCESS"})
//                 reject(new Error("Too long Wait..."));
//             }, ms)
//         }
//     })
//     console.log("Demo Promise End")
//     return promise;
// }

// async function consumePromise(){
//     try{
//         const result = await demoPromise(2000);
//         console.log("Promise Consumed with ", result);
//     }catch(err){
//         console.log("Promise Rejected ", err)
//     }
// }


// function consumePromise(){
//     console.log("Consume Promise Start")
//     demoPromise(4000).then(result =>{
//          console.log("Promise Result ", result);
//          console.log("Consume Promise End")
//         }).catch(err => console.log(err))
// }

// consumePromise();

// Start -> SUCCESS -> End









// DESTRUCTURING

// let friends = ["Foo", "Bar", "Bam", "Baz"];

// let [f1, f2, f3, f4] = friends;

// console.log(f3);            // "Bam"

// f3 = "Alice"

// // friends[2] = "Mario"

// console.log(friends[2]);            // "Bam"

// console.log(f3);            // "Alice"



// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32,
//     friends : ["Baz", "Bam"],
//     address :{ 
//         street : "201, Min Road",
//         city : "Bengaluru"
//     }
// }

// let { lastName, age, firstName, friends : [f1, f2], address : { street, city }  } = user;

// console.log(f1);             // "Baz"
// console.log(city);             // "Bengaluru"




// let users = [
//     {
//         email : "john@test", age : 32
//     },
//     {
//         email : "jenny@test", age : 33
//     },
//     {
//         email : "james@test", age : 34
//     },
//     {
//         email : "jill@test", age : 35
//     },
// ]


// let [user1, user2, user3] = users;
// let {email : e1, age : a1} = user1;
// let {email : e2, age : a2} = user2;

// console.log(e1, e2, a1, a2); 




// Template String/Literals


// let username = "John Doe";
// let age = 32;

// let str = `
// Hello from ${username}
// I'm ${age} years old!
// `

// console.log(str);



// SPREAD
// let fruits = ["apple", "guava", "kiwi"];

// let newFruits = ["oranges", "banana", ...fruits];

// console.log(newFruits);             // ["oranges", "banana", "apple", "guava", "kiwi"]

// let userOne = {
//     age : 32
// }

// let userTwo = {
//     ...userOne,
//     email : "user2@email.com",
//     age : 34
// }

// console.log(userTwo);       // {age : 32, email : "user2@email.com"}

// const newObject = Object.assign({}, userOne, userTwo)

// console.log("New Object : ", newObject)



// REST (...) : function arguments; last argument; takes individual elements and create the collection;

// function demo(email, age, ...args){
//     console.log(args[0]);          // "test@test.com" || 32
// }

// demo("test@test.com")
// demo("test@test.com", 32)
// demo("test@test.com", 32, true)



// ARROW FUNCTIONS
// let numbers = [1,2,3,4,5];

// // ES5 Syntax
// const newNumbers = numbers.map(function(n){
//     return n * 2;
// })

// console.log(newNumbers);            // [2,4,6,8,10]

// // ES6 Syntax (Arrow Function)

// // const newNumbersTwo = numbers.map( n => n * 3 );
// const newNumbersTwo = numbers.map( n => {
//     return n * 3
// } );

// console.log(newNumbersTwo);     // [3,6,9,12,15]


// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName: function(){
//         // return this.lastName + " "  + this.firstName;
//         // let that = this;
//         // function nestedFn (){
//         //     return that.lastName + " "  + that.firstName;
//         // }

//         const nestedFn = () => this.lastName + ", " + this.firstName;

//         return nestedFn();
//     }
// }

// console.log(user.getFullName());            // "Bar Foo" || 


// Constructor Pattern
// function Person (fname, lname){
//     this.fname = fname;
//     this.lname = lname;
//     this.sayHello = function(){
//         return "Hello from " + this.fname
//     }
// }
// const Person = (fname, lname) => {
//     this.fname = fname;
//     this.lname = lname;
//     this.sayHello = function(){
//         return "Hello from " + this.fname
//     }
// }

// const foo = new Person("Foo", "Bar");

// console.log(foo.sayHello());


// DEFAULT PARAMETER

// const demo = (state = []) => {
//     const val = state.filter(r => r < 3)
//     console.log(val)
// }


// demo()






// CLASS

class Person {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person {
    constructor(studId, name){
        super(name)
        this.studId = studId;
    }

    getDetails(){
        return this.studId + " : " + this.getName();
    }
}

let foo = new Student("S001", "Foo Bar")

console.log(foo.getDetails());

