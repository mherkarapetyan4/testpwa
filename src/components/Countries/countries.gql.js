import { gql } from '@apollo/client';

const GET_COUNTRIES_QUERY = gql`
    query GetCountries {
        countries {
            id
            full_name_english
        }
    }
`;

export default {
    queries: {
        getCountriesQuery: GET_COUNTRIES_QUERY
    },
    mutations: {}
};