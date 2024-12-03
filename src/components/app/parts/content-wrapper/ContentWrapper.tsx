import React, {FC, useEffect} from 'react';

import {runHideLoader} from '@reducers/preloader/dispatchers';
import {RoutesWrapper} from '@components/routes-wrapper';

import styles from './styles.scss';

export const ContentWrapper:FC = () => {

    useEffect(() => {
        runHideLoader(1000);
    });

    return (
        <div className={styles.top}>
            <RoutesWrapper/>
        </div>
    );

    // return (
    //     <div className={styles.main}>
    //         <div className={styles.top}>
    //             <RoutesWrapper/>
    //         </div>
    //     </div>
    // );
};

