import React from 'react';

const Regions = props => {
    const { regions } = props;

    if (regions) {
        const listItems = regions.map(region => {
            const { name } = region;
            return <li key={name}>{name}</li>;
        });

        return <ul>{listItems}</ul>;
    }

    return null;
};

export default Regions;