import React, {useLayoutEffect} from 'react';
// import {useParams,} from 'react-router-dom';

import {generalGames} from '@games-info';

import {GamesLinks} from '@components/routes/components';
import {runHideLoader, showLoader} from '@reducers/preloader/dispatchers';
// import {setStudyStage} from '@reducers/subject-info/dispatchers';
import {useSelector} from 'react-redux';
import {subjectInfoSelectors} from '@reducers/subject-info/selectors';

export default () => {
    const studyStage = useSelector(subjectInfoSelectors.studyStage);
    // const params = useParams();
    // const {studyStage = ''} = params;
    const currentStudyStage = +studyStage;
    // const {} = metadataSections;

    // console.log('studyStage LevelsGames', studyStage);

    //закометив 08.06, по логіці цей ефект не потрібен
    // useEffect(() => {
    //     setStudyStage(+studyStage);
    //     showLoader();
    //
    //     return () => {
    //         showLoader();
    //     };
    // }, [studyStage]);

    useLayoutEffect(() => {
        runHideLoader(1000);

        return () => {
            showLoader();
        };
    }, [studyStage]);

    const currentGames = generalGames.filter((game) => game.enablesStudyStage.includes(currentStudyStage));

    return <GamesLinks
        games={currentGames}
        gamesSection={'general'}/>;
};
