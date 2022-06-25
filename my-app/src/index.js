import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
// import { rootReducer } from './store/reducers/rootReducer';
import { goalReducer } from './store/reducers/goalReducer';
import { commentReducer } from './store/reducers/commentReducer';


const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})


const store = createStore(combineReducers({
  goalReducer,
  commentReducer
}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);