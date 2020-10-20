import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from '@magento/venia-ui/lib/drivers';

import countryOperations from './country.gql';

import Regions from './regions';

const Country = () => {
    const { id } = useParams();

    const { queries } = countryOperations;
    const { getCountryQuery } = queries;

    // Fetch the data using apollo react hooks
    const { data, error, loading } = useQuery(getCountryQuery, {
        variables: { id: id }
    });

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        // NOTE: This is only meant to show WHERE you can handle
        // GraphQL errors. Not HOW you should handle it.
        return <span>Error!</span>;
    }

    const { country } = data;

    const { full_name_english: name, available_regions: regions } = country;

    return (
        <div>
            <h2>{name}</h2>
            <Regions regions={regions} />
        </div>
    );
};

export default Country;