import React, {memo, MouseEventHandler} from 'react';
import {useSelector} from 'react-redux';
import {ButtonsLang, DefaultGame, HomeworkGameStatus, HomeworkGameStatusE} from '@custom-types';

import {initFinishPlaying} from '@lib/game/actions';

import {showLoader} from '@reducers/preloader/dispatchers';
import {deleteGameData, runGame, runPlayingGame} from '@reducers/game/dispatchers';
import {setHomeworkGameStatus} from '@reducers/homework-game-status/dispatchers';
import {homeworkGameStatusSelectors} from '@reducers/homework-game-status/selectors';
import {Btn, Tooltip} from '@components/common/elements';
import {LocalizedText} from '@components/common';

import styles from './styles.scss';
import {BtnType} from '@components/common/elements/btn/Btn';

import {useMoveToHomework} from '@lib/custom-hooks';

type P = {
    isHomework:boolean;
    gameStatus:DefaultGame['status'];
};

const BottomButtons = ({gameStatus, isHomework}:P) => {
    const {isRunGame, isDisabledStartBtn, isPlaying} = gameStatus;
    const status = useSelector(homeworkGameStatusSelectors.status);

    const [startBtnText, type, startBtnHandler] = useStartBtnTextAndHandler(gameStatus, status, isHomework);

    const exitHandler = () => {
        deleteGameData();
    };

    const handler:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.currentTarget.blur();

        setHomeworkGameStatus(null);
        startBtnHandler();
    };

    const ExitBtn = <Btn textCode={'settings'} handler={exitHandler}/>;

    return (
        <div className={styles.buttonsWrap}>
            {(isRunGame && !isHomework) && (
                isPlaying 
                    ? <Tooltip 
                        placement={'topLeft'}
                        overlayInnerStyle={{borderRadius: '56px'}}
                        overlay={<p><LocalizedText name={'exitToSettings'} path={'games/translation'} useSuspense={false}/></p>}>
                        <div>{ExitBtn}</div>
                    </Tooltip> 
                    : <>{ExitBtn}</>
            )}
            <Btn className={styles.start} disabled={isDisabledStartBtn} type={type} textCode={startBtnText} handler={handler} />
        </div>
    );
};

export const BottomButtonsM = memo(BottomButtons);

const useStartBtnTextAndHandler = (gameStatus:DefaultGame['status'], {status}:HomeworkGameStatus, isHomework:boolean):[keyof ButtonsLang, BtnType, () => void] => {
    const {isPlaying, isFinishPlaying, isRunGame} = gameStatus;
    const moveToHomework = useMoveToHomework();

    if (isPlaying) {
        return ['finishGame', 'normal', initFinishPlaying];
    }

    if (!isRunGame) {
        return ['next', 'primary', () => {
            showLoader();
            runGame();
        }];
    }

    if (isFinishPlaying && isHomework) {
        if (status === HomeworkGameStatusE.levelNotDone) {
            return ['tryAgain', 'primary', runPlayingGame];
        }

        if (status === HomeworkGameStatusE.levelDone) {
            return ['next', 'primary', runPlayingGame];
        }

        if (status === HomeworkGameStatusE.roundDone) {
            return ['toChallenge', 'primary', moveToHomework];
        }
    }

    const text = isFinishPlaying ? 'newGame' : 'play';

    return [text, 'primary', runPlayingGame];
};
