import React from 'react';
import Notes from './Components/Notes/Notes';


const App = () => {
  return (
    <div className='container'>
      <h2>Hello React!!!</h2>
      <p>This is another content...</p>
      <Notes />
    </div>
  )
}



// const App = () => {
//   return React.createElement("div", {className : "App"}, 
//             React.createElement("h1", {}, "Hello React!!"))
// }


// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello React</h1>
//          <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//          </ul>
//     </div>
//   );
// }

export default App;
