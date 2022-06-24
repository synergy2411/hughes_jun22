import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './Components/Auth/Login';
import Auth from './Components/Demo/Auth';
import ClassBasedComp from './Components/Demo/ClassBasedComp';
import DemoUseCallback from './Components/Demo/DemoUseCallback';
import DemoUseEffect from './Components/Demo/DemoUseEffect';
import DemoUseMemo from './Components/Demo/DemoUseMemo';
import DemoUseReducer from './Components/Demo/DemoUseReducer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Header from './Components/Header/Header';
import Notes from './Components/Notes/Notes';
import AuthContext from './context/auth-context';
import AuthorDetail from './Pages/Authors/AuthorDetail/AuthorDetail';
import Authors from './Pages/Authors/Authors';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className='container'>
        <Header />

        <ErrorBoundary>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>

            <Route path="/notes">
              <Notes />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/authors/:authorId">
              <AuthorDetail />
            </Route>

            <Route path="/authors">
              <Authors />
            </Route>
          </Switch>
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
