import React from 'react';
import Login from './Components/Auth/Login';
import ClassBasedComp from './Components/Demo/ClassBasedComp';
import DemoUseEffect from './Components/Demo/DemoUseEffect';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Notes from './Components/Notes/Notes';


const App = () => {
  return (
    <div className='container'>
      <h2>Hello React!!!</h2>
      <p>This is another content...</p>

    <ErrorBoundary>
      <DemoUseEffect />
      {/* <Login />*/}
      {/* <Notes />  */}
    </ErrorBoundary>

      {/* <ClassBasedComp show={true}>
          <div>
            <h5>The container Element</h5>
          </div>
      </ClassBasedComp> */}

      {/* <Notes /> */}
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
