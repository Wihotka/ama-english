import React, {useState} from 'react';
import {GlobalSettings, LocalizedText} from '@components/common';

import styles from './styles.scss';
import {Btn, CustomIcon} from '@components/common/elements';
import {deleteGameData} from '@reducers/game/dispatchers';
import {initFinishPlaying} from '@lib/game/actions';
import {useNavigate} from 'react-router-dom';
import {ButtonsLang, GameConfig, GameSettings} from '@custom-types';
import {useSelector} from 'react-redux';
import {gameSelectors} from '@reducers/game/selectors';
import {
    AnimationModalWrapper
} from '@components/common/game/game-inner/content/parts/bottom-navigation/parts/animation-modal-wrapper';

import {useBackBtnPath, useMoveToHomework} from '@lib/custom-hooks';

type P = {
    isHomework:boolean;
    hideModal:() => void;
};

enum SecondModalType {
    finish = 'finish',
    exit = 'exit',
    challenge = 'challenge',
    settings = 'settings'
}

export const Modal = ({isHomework, hideModal}:P) => {
    const [secondModalType, setSecondModalType] = useState<SecondModalType>();

    const btnHandler = (type:SecondModalType) => {
        setSecondModalType(type);
    };

    const opacity = secondModalType ? 0 : 1;

    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay} style={{opacity}} onClick={hideModal}/>
            <div className={styles.modalInner} style={{opacity}}>
                <div className={styles.modalButtons}>
                    <Btn handler={() => btnHandler(SecondModalType.finish)} isRound={true}>
                        <CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={'finish'} />
                    </Btn>

                    {!isHomework && <Btn handler={() => btnHandler(SecondModalType.exit)} isRound={true}>
                        <CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={'gamesMenu'} />
                    </Btn>}
                    {!isHomework && <Btn handler={() => btnHandler(SecondModalType.settings)} isRound={true}>
                        <CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={'settings'}/>
                    </Btn>}
                    {isHomework && <Btn handler={() => btnHandler(SecondModalType.challenge)} isRound={true}>
                        <CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={'homework'}/>
                    </Btn>}
                </div>
                <GameInfo/>
                <GlobalSettings/>
            </div>
            <AnimationModalWrapper inn={!!secondModalType}>
                <>{secondModalType && <SecondModal hideModal={hideModal} type={secondModalType}/>}</>
            </AnimationModalWrapper>
        </div>
    );
};

const GameInfo = () => {
    const {gameName, section} = useSelector(gameSelectors.gameConfig) as GameConfig;
    const {level, mode} = useSelector(gameSelectors.gameSettings) as GameSettings;

    const afterLevelText = {
        path: `games/${section}/${gameName}/translation`,
        name: `taskName${level ?? `.${mode}`}`
    };

    return <p><LocalizedText {...afterLevelText}/></p>;
};

type SP = Pick<P, 'hideModal'>& {
    type:SecondModalType;
};

const SecondModal = ({hideModal, type}:SP) => {
    const text = SecondTextResolver[type];
    const [textCode, action] = useExitButtonTextAndAction(type);

    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay} onClick={hideModal}/>
            <div className={styles.modalInner}>
                <p className={styles.modalTitle}><LocalizedText name={text} path={'modals/mobileGameExit/translation'}/>?</p>
                <div className={styles.modalButtons}>
                    <Btn isRound handler={action} textCode={textCode}/>
                    <Btn isRound handler={hideModal} textCode={'no'}/>
                </div>
            </div>
        </div>
    );
};

const SecondTextResolver = {
    finish: 'finishGame',
    exit: 'exitGame',
    challenge: 'goToChallenge',
    settings: 'goToSettings',
};

const useExitButtonTextAndAction = (type:SecondModalType):[keyof ButtonsLang, () => void] => {
    const navigate = useNavigate();
    const backBtnPath = useBackBtnPath();
    const moveToHomework = useMoveToHomework();

    if (type === 'settings') {
        return ['yes', () => deleteGameData()];
    }

    if (type === 'challenge') {
        return ['yes', () => moveToHomework()];
    }

    if (type === 'finish') {
        return ['yes', () => initFinishPlaying()];
    }

    return ['yes', () => navigate(backBtnPath)];
};

// const ExitButtonTextAndActionResolver = {
//     finish: ['finishGame', initFinishPlaying],
//     exit: 'realy exit?',
//     settings: ['settings', deleteGameData],
//
// };