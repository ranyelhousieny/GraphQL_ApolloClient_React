import React from 'react';

import gql from 'graphql-tag';

import { Query } from 'react-apollo';

const Country = ( props ) => {
    const { country_id }  = props.match.params
    console.log( "props", props, " Country Id = ", country_id );
    
    const QUERY = gql `query ($country_id: ID!) {
        country(code:$country_id){
            code
            name
            native
        }
}`
    return (
        <div>
            
            <Query query={ QUERY } variables={ { country_id } }>
                { ( { loading, error, data } ) => {
                    if ( loading ) return ( <h1>Loading ...</h1> );
                    if ( error ) console.log( error );
                    if (data) return (
                        <div>
                            <h1>{ data.country.name } Details</h1>
                            <h3>Country Name: { data.country.name }</h3>
                            <p>Native: { data.country.native}</p>
                        </div>
                    )
                
                } }
            </Query>
        </div>
    );
};

export default Country;


