import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from '@magento/venia-drivers';
import path from 'path';

import countriesOperations from './countries.gql';

const Countries = () => {
    const { queries } = countriesOperations;
    const { getCountriesQuery } = queries;

    // Fetch the data using apollo react hooks
    const { data, error, loading } = useQuery(getCountriesQuery);

    // Loading and error states can detected using values returned from
    // the useQuery hook
    if (loading) {
        // Default content rendered while the query is running
        return <span>Loading...</span>;
    }

    if (error) {
        // NOTE: This is only meant to show WHERE you can handle
        // GraphQL errors. Not HOW you should handle it.
        return <span>Error!</span>;
    }

    const { countries } = data;

    const listItems = countries.map(country => {
        const { id, full_name_english: name } = country;

        const linkTo = path.join('country', id);

        return (
            <li key={id}>
                <Link to={linkTo}>{name}</Link>
            </li>
        );
    });

    return <ul>{listItems}</ul>;
};

export default Countries;