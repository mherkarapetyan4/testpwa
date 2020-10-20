import { gql } from '@apollo/client';

const GET_COUNTRY_QUERY = gql`
    query GetCountry($id: String) {
        country(id: $id) {
            id
            full_name_english
            available_regions {
                id
                name
            }
        }
    }
`;

export default {
    queries: {
        getCountryQuery: GET_COUNTRY_QUERY
    },
    mutations: {}
};