# Break Timings
10:30 - 10:45 
12:15 - 12:30



# JavaScript - What Why How?
- Single Threaded is Non Blocking
- Scripting Language
- Frontend as well as Backend
- Everything in JS is Object
- Event Loop
- Asynchronous / Non Blocking 



JavaScript Environment
- Browser : Frontend JS
- NodeJS Platform : Backend JS


- Async Task Handling
> Promise : ES6
> Callbacks
> Async...await
> Observables

Promise -> used to execute async task; two states - resolve reject
- pending : Initial State
- resolve : Success State
- reject : Error State

- Producer Code
- Consumer Code : .then().catch() || Async...await



# JavaScript Libraries (Specific Purpose / Small size) / Frameworks (Structured / More Functionalities)
- jQuery : DOM Manipulation, Animation, AJAX
- React : Virtual DOM; JSX Code; 
    > Renders the UI Quickly and efficiently
    > react-router-dom to create SPA
    > State Management - redux
    > XHR Call - axios, fetch API etc
    > form Validation - formik, react-form-hook etc
    > Radium for styling
    > StyledComponent for creating Stylish Component
    > react-dom to render React App on Browser

- *Angular : DOM Manipulation, SPA, 2Way binding, State Management, XHR Call, Templates, Component based Arch, Clean up the frontend - MVC Pattern at client side etc, Angular Universal
- *EmberJS : all the same 
- Backbone : MVC Arch at client, 2 way data binding
- Meteor : platform to run JS on various platforms
- *NextJS : SSR of React
- VueJS : Virtual DOM; Data binding; Template oriented; (Evan You)
- KnockoutJS : 2 way data binding; MVVM
- D3JS : Charting Lib

- NodeJS : Platform; Backend
- ExpressJS : Web App Framework; runs on Node Platform



•	ES6/ES2015 Overview : ECMA community
    2015 -> ES2015 / ES6 feature
    2016 -> ES7
    2017 -> ES8
    2018 -> ES9


•	Destructuring Objects & Arrays : 
    - "extracting" the elements from collection
    - No link between the extracted value and old collection

•	Template String/Literals : `` (back tick) | ' ' | " "
    - Embed the variable within string without ( + ) || (${})
    - Multiline Strings without (\n)


•	Spread & Rest operators (...)
    - Spread -> add data into collection ; spread the collection into individual elements
    - Rest -> function arguments; created the collection from individual elements


•	Arrow Functions => different way of creating inline function
    - Don't have their own 'this' keyword 
    - Don't have "arguments" object
    - Can't be called with 'new' Operator
    - Two flavours -> with/out {}
    - Without {} -> single line statement returned by the arrow function
    - With {} -> explicitly write the 'return' statement





•	Optional and Named Parameters
•	Classes & Modules
•	Working with Modules


# Thinking in React
- What code is eligible to be a component

# Atomic Web Design Principle
- Atom : Smalled unit eg. button, p, li, input etc
- Molecule : Combo of Atoms eg. searchbar -> Input + Button
- Organism : Combo of Molecules eg. Form may conatin label with input filed, checkboxes and radio buttons, navigation bar : various links + SerachBar
- Template : combo Organism eg. 
- Page : Impl of Templates


# to install bootstrap -> 
> npm i bootstrap@4


# Hooks : support for functional components

React v16.8 -> Hooks

- Class : state management, side effects etc

- Function : state - useState, side effects calls  - useEffect etc


- State changes, React re-render the Component -> setState()
- JavaScript Variables, doesn't maintain watchers about them


# Form Elements
- Uncontrolled
- Controlled

# Immutable Principle - NEVER EVER modify existing state