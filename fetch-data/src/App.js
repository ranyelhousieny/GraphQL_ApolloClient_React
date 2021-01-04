import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERY = gql `query{
  country(code:"US"){
    code
    name
  }
}`

function App() {
  return (
    <div>
      <h1>GraphQL Apollo Client in React</h1>
      <h2>By: Rany ElHousieny</h2>
      <Query query={ QUERY }>
        { ( { loading, error, data } ) => {
          if ( loading ) return ( <h1>Loading ...</h1> );
          if ( data ) return (
            <div>
              <hr/>
                <h1> Data from GraphQL:</h1>
                <h1>Country Name: { data.country.name }</h1>
            </div>
            
          )
        }}
      </Query>
    </div>
  );
}

export default App;
