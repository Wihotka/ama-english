import React, {useLayoutEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import * as themes from '@theme/schema.json';
import {pathConfig} from '@global-config/path-config';
import {showLoader} from '@reducers/preloader/dispatchers';
import {ThemeProvider} from 'styled-components';
import {Preloader} from '@components/app/parts';
import {useSelector} from 'react-redux';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

export default () => {
    const {pathname} = useLocation();
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    const {data} = themes.default;
    const isFunGames = pathname.includes(pathConfig.funGames);
    const themeName = isFunGames ? 'funGames' : `studyStage${studyStage}`;
    const currentTheme = data[themeName] || data['default'];

    // document.body.style.background = pathname !== `/${pathConfig.levels}`
    //     ? `url(${require(`/assets/img/studyStages/${bgPath}.png`)}) 0% 0% / cover fixed`
    //     : `url(${require('/assets/img/studyStages/pageBg.png')}) 0% 0% repeat`;
    // document.body.style.background = `url(${require(`/assets/img/studyStages/pageBg.png`)}) 0% 0% repeat`;

    useLayoutEffect(() => {
        showLoader();
    }, [studyStage]);

    return (
        <ThemeProvider theme={currentTheme}>
            <Preloader/>
            <Outlet/>
        </ThemeProvider>
    );
};
