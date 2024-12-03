import {useCallback, useEffect, useState} from 'react';

export const useAsyncState = <T>(initialValue:T):[T, (data:T) => void] => {
    const [unmounted, setUnmounted] = useState(false);
    const [state, setState] = useState(initialValue);

    useEffect(() => () => setUnmounted(true), []);

    const setStateSafe = useCallback(
        (value) => {
            if (unmounted) {
                return;
            }

            setState(value);
        },
        [unmounted]
    );

    return [state, setStateSafe];
};
