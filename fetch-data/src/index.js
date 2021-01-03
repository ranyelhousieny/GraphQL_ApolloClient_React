import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// GraphQL Code
// 1. Get Apollo Provider to wrap all child components
import { ApolloProvider } from 'react-apollo';

// 2. Create Apollo Client
import { ApolloClient } from 'apollo-client';
const client = new ApolloClient();

// 3. wrap your app inside the provider
ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

