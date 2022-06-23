import React, { useState } from 'react';
import Login from './Components/Auth/Login';
import Auth from './Components/Demo/Auth';
import ClassBasedComp from './Components/Demo/ClassBasedComp';
import DemoUseCallback from './Components/Demo/DemoUseCallback';
import DemoUseEffect from './Components/Demo/DemoUseEffect';
import DemoUseMemo from './Components/Demo/DemoUseMemo';
import DemoUseReducer from './Components/Demo/DemoUseReducer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Notes from './Components/Notes/Notes';
import AuthContext from './context/auth-context';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className='container'>
        <ErrorBoundary>
          <DemoUseMemo />
          {/* <DemoUseCallback /> */}
          {/* < Auth />
          <Login /> */}
        </ErrorBoundary>
      </div >
    </AuthContext.Provider>
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
