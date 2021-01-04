import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

// GraphQL Code
// 1. Get Apollo Provider to wrap all child components
import { ApolloProvider } from 'react-apollo';

// 2. get Apollo Cache and HttpLink
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// 3. import Apollo Client
import { ApolloClient } from 'apollo-client';

import gql from 'graphql-tag';
import Country from './components/Country';

const cache = new InMemoryCache( {} );
const link = new HttpLink();

const client = new ApolloClient( {
  cache,
  link
} );

client.query( {
  query: gql`
  query{
  country(code:"US"){
    code
    name
  }
}
  `
} )
.then(result => console.log(result));

// 4. wrap your app inside the provider
ReactDOM.render(
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <Route exact path='/' component={ App } />
      <Route exact path='/country/:country_id' component={ Country} />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
