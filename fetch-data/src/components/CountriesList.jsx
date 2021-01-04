import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo';
import gql from 'graphql-tag'; 

const COUNTRIES_LIST = gql `query {
    countries{
    code
    name
  }
}`
const CountriesList = () => {
    return (
        <div>
            <p style={{fontWeight:"bold"}}>Countries List: </p>
            <p>From GraphQL By: Rany ElHousieny</p>
            <hr />
            <Query query={ COUNTRIES_LIST }>
                { ( { loading, error, data } ) => {
                    if (loading) return (<h1>Loading ....</h1>)
                    if ( data ) return (
                        <div>
                            { console.log( "data", data ) }
                            {data.countries.map((country) => {
                            return (
                                <div>
                                <li key={country.code}>{ country.name }</li>
                                    <Link to={ `/country/${country.code}` } >Details</Link>

                                    <hr/>
                                    </div>
                            )
                        } ) }
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default CountriesList;