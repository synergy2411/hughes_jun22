import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
// import { rootReducer } from './store/reducers/rootReducer';
import { goalReducer } from './store/reducers/goalReducer';
import { commentReducer } from './store/reducers/commentReducer';
import { logger } from './store/middleware/logger';

const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  goalReducer,
  commentReducer
}), composeEnhancers(applyMiddleware(logger, thunk)))


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