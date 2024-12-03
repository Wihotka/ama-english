import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {useAsyncState, useMoveToBase} from '@lib/custom-hooks';
import {ApiConnector} from '@lib/api-connector';

import {runHideLoader} from '@reducers/preloader/dispatchers';
import {setPageTitle} from '@reducers/page-title/dispatchers';

import {Btn} from '@components/common/elements';

import {Content, RoundFinishModal} from './parts';

import {GamesSection} from '@games-info';
import {HomeworkData} from './types';

export default () => {
    const [homeworkData, setHomeworkData] = useAsyncState<HomeworkData|null>(null);
    const {t} = useTranslation('challenge/translation');
    const gamesStr = t('challenge');
    const moveToBase = useMoveToBase();

    useEffect(() => {
        setPageTitle(gamesStr);
    }, [gamesStr]);

    useEffect(() => {
        ApiConnector.getHomeworkPageData<GamesSection>(isolatedResp).then((data) => {
            const {hasAccessToPage} = data;

            if (!hasAccessToPage) {
                moveToBase();
            } else {
                setHomeworkData(data);

                runHideLoader(1500);
            }

        });
    }, []);

    if (!homeworkData) return null;

    const {progress, task} = homeworkData.homeworkData;
    const {stageNow, canStartNewRound} = progress;
    const {game, section} = task.stages[stageNow] || {};

    const startNewRoundHandler = () => {
        const {subjectID, common: {user: {id}}} = homeworkData;

        ApiConnector.startNewRound<GamesSection>({subjectID, userID: id})
            .then((data) => setHomeworkData(data));
    };

    return (
        <>
            <Content homeworkData={homeworkData.homeworkData}/>
            {canStartNewRound &&
                <RoundFinishModal
                    canStartNewRound={canStartNewRound}
                    startNewRoundHandler={startNewRoundHandler}/>
            }
            <NavLink
                style={{marginLeft: 'auto'}}
                to={`../${section}/${game}?isHomework=true`}>
                {/*to={`${pathConfig.base}/${section}/${game}?isHomework=true`}>*/}
                <Btn type={'primary'} textCode={'play'}/>
            </NavLink>
        </>
    );
};

const isolatedResp:HomeworkData = {
    homeworkData: {
        hasAccess: true,
        hometaskID: 123,
        task: {
            rounds: 4,
            comment: 'asd',
            stages: {
                1: {
                    game: 'lostTwins',
                    levels: '5',
                    settings: {
                        level: '2',
                        theme: 'professions',
                        mode: 'easy',
                        course: '3',
                        fieldSize: '5x4',
                        hint: '1'
                    },
                    section: 'general'
                },
                2: {
                    game: 'alphabet',
                    levels: '5',
                    settings: {
                        level: '1',
                        letters: 'capital',
                        mode: 'easy',
                        speedInSeconds: '5',
                        lettersQty: '4',
                    },
                    section: 'general'
                },
                3: {
                    game: 'alphabet',
                    levels: '5',
                    settings: {
                        level: '1',
                        letters: 'capital',
                        mode: 'easy',
                        speedInSeconds: '5',
                        lettersQty: '4',
                    },
                    section: 'general'
                },
                4: {
                    game: 'alphabet',
                    levels: '5',
                    settings: {
                        level: '1',
                        letters: 'capital',
                        mode: 'easy',
                        speedInSeconds: '5',
                        lettersQty: '4',
                    },
                    section: 'general'
                },
                5: {
                    game: 'alphabet',
                    levels: '5',
                    settings: {
                        level: '1',
                        letters: 'capital',
                        mode: 'easy',
                        speedInSeconds: '5',
                        lettersQty: '4',
                    },
                    section: 'general'
                },
            }
        },
        progress: {
            roundsToDo: 1,
            roundsDone: 1,
            roundNow: 1,
            stagesToDo: 1,
            stagesDone: 2,
            stageNow: 3,
            levelsToDo: 1,
            levelsDone: 1,
            levelNow: 1,
            canStartNewRound: false,
            hometaskDone: false,
            currentRoundFinished: false,
        },
        cartoonData: {
            needShow: true
        }
    },
    hasAccessToPage: true,
    subjectID: 11,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    common: null
};