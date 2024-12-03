import React from 'react';
import {NavLink} from 'react-router-dom';

import {Btn} from '@components/common/elements';

import styles from './styles.scss';

import {LocalizedText} from '@components/common/localized-text';

type P = {
    canStartNewRound:boolean;
    startNewRoundHandler:Function;
};

export const RoundFinishModal = (p:P) => {
    const {canStartNewRound, startNewRoundHandler} = p;

    const title = canStartNewRound ? 'allowNewRound' : 'roundFinished';
    const subtitle = canStartNewRound ? 'youCanStartNewRound' : 'newRoundTomorrow';

    return (
        <div className={styles.modal}>
            <div className={styles.modal__body}>
                <div>
                    <p className={styles.modal__title}><LocalizedText name={`roundFinish.${title}`} path={'challenge/translation'}/>!</p>
                    <p className={styles.modal__text}><LocalizedText name={`roundFinish.${subtitle}`} path={'challenge/translation'}/>.</p>
                </div>
                <div className={styles.modal__btns}>
                    <NavLink
                        to={'../'}>
                        <Btn textCode={'exit'}/>
                    </NavLink>
                    {canStartNewRound &&
                        <Btn
                            type={'primary'}
                            textCode={'start'}
                            style={{marginLeft: 'auto'}}
                            handler={startNewRoundHandler}/>}
                </div>
            </div>
        </div>
    );
};
