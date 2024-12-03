import React, {FC, useEffect} from 'react';

import {loadMetadata} from './utils/load-metadata';
import {useAsyncState} from '@lib/custom-hooks';

export const MainContent:FC = ({children}) => {
    const [isLoadedData, setIsLoadedData] = useAsyncState<boolean>(false);

    useEffect(() => {
        loadMetadata(() => setIsLoadedData(true));
    }, []);

    if (!isLoadedData) return null;

    return <>{children}</>;
};
