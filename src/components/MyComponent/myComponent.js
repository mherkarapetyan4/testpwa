// import React, { useState, useCallback } from 'react';
import React, { useCallback } from 'react';
import {useAppContext} from '@magento/peregrine/lib/context/app'

import Button from "@magento/venia-ui/lib/components/Button";

const MyComponent = () => {
    // const [booleanStatus, setBooleanStatus] = useState(false);
    const [appState, appApi] = useAppContext();
    const booleanStatus = appState.overlay;
    const { toggleDrawer } = appApi;

    const toggleStatus = useCallback(() => {
        // setBooleanStatus(previousStatus => !previousStatus);
        toggleDrawer('myComponent');
    });

    const text = booleanStatus ? 'On' : 'Off';

    return <Button onClick={toggleStatus}>{text}</Button>;
};

export default MyComponent;