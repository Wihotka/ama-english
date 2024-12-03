import React from 'react';
import {useSelector} from 'react-redux';

import {pathConfig} from '@global-config/path-config';

import {metadataSelectors} from '@reducers/metadata/selectors';

import {LangSwitcher, Volume, StudyStageSetter} from './parts';
import {useLocation} from 'react-router-dom';

export const GlobalSettings = () => {
    const {canCheckStudyStage} = useSelector(metadataSelectors.metadata);
    const {pathname} = useLocation();

    const isFunSection = pathname.split('/').includes(pathConfig.funGames);

    return (
        <div>
            <LangSwitcher/>
            <Volume/>
            {canCheckStudyStage && !isFunSection && <StudyStageSetter/>}
        </div>
    );
};
