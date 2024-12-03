import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StoreInner} from '@store';
import {
    incrementGamesCounterForFeedback,
    resetGamesCounterForFeedback,
    excludeGameForFeedback,
    incrementPlatformCounterForFeedback,
    resetPlatformCounterForFeedback,
    excludePlatformForFeedback
} from '@reducers/games-counter-for-feedback/dispatchers';
import {globalGameConfig} from '@global-config/game';
import {FeedbackGroup} from '@components/common/game/components';

type Props = {gameName?:string};

export const FeedbackChecker = React.memo(({gameName}:Props) => {
    const {
        counterForGames,
        gamesWithoutFeedback,
        counterForPlatform,
        platformWithoutFeedback
    } = useSelector((store:StoreInner) => store.gamesCounterForFeedback);
    const [isShowFeedbackGroup, setIsShowFeedbackGroup] = useState(false);

    useEffect(() => {
        // Фидбэк для игр
        if (gameName) {
            if (gamesWithoutFeedback.includes(gameName)) {
                setIsShowFeedbackGroup(false);
            } else {
                if (counterForGames < globalGameConfig.gamesTriesToShowFeedbackWindow) {
                    incrementGamesCounterForFeedback();
                } else {
                    const excludedGames = [...gamesWithoutFeedback, gameName];
    
                    setIsShowFeedbackGroup(true);
                    excludeGameForFeedback(gameName);
                    resetGamesCounterForFeedback();
                    // Сохраняем cookie
                    document.cookie = `feedbackGames=${excludedGames};max-age=${globalGameConfig.feedbackGamesCookieLifeTimeInSec}`;
                }
            }
        }
        // Фидбэк для платформы
        else {
            if (platformWithoutFeedback) {
                setIsShowFeedbackGroup(false);
            } else {
                if (counterForPlatform < globalGameConfig.platformEntriesToShowFeedbackWindow) {
                    incrementPlatformCounterForFeedback();
                    localStorage.setItem('platformEntries', (counterForPlatform + 1).toString());
                } else {
                    setIsShowFeedbackGroup(true);
                    excludePlatformForFeedback();
                    resetPlatformCounterForFeedback();
                    localStorage.setItem('platformEntries', '0');
                    // Сохраняем cookie
                    document.cookie = `feedbackPlatform=${true};max-age=${globalGameConfig.feedbackPlatformCookieLifeTimeInSec}`;
                }
            }
        }
    }, []);

    return <FeedbackGroup
        isOpenModal={isShowFeedbackGroup}
        gameName={gameName ?? ''}
        callback={() => console.log('Закрыто')}
    />;
    //
    // return isShowFeedbackGroup ? (
    //     <FeedbackGroup isOpenMessage={true}/>
    // ) : <div/>;
});
