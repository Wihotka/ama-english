import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from 'js-data-utils';
import {isEmpty} from 'lodash';

import {Btn} from '@components/common/elements';
import {LocalizedText} from '@components/common';
import {deleteGameData, deleteAllGameData} from '@reducers/game/dispatchers';
import {setPageTitle} from '@reducers/page-title/dispatchers';
import {ArenaModes} from '@custom-types';
import {StoreInner} from '@store';
import {useLocal} from '../../../utils';

import styles from './styles.scss';

export type GameFinishP = {
    mode:ArenaModes
};

type Player = {
    name:string;
    score:number;
};

type GameData = {
    words:{};
    players:{
        player1?:Player;
        player2?:Player;
    };
};

export const GameFinish = () => {
    const [finalScore, setFinalScore] = useState<number[]>([0, 0]);
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);

    const gameData:GameData = useSelector((store:StoreInner) => store.game.gameData) as GameData;
    const {players} = gameData;

    const gamePlayData:any = useSelector((store:StoreInner) => store.game.gamePlayData) as any;

    const title = useLocal('finish');

    const handleRestartClick = () => {
        deleteGameData();
    };

    useEffect(() => {
        setPageTitle(title);
    }, [title]);

    useEffect(() => {
        if (!isEmpty(gamePlayData) && players.player1 && players.player2)
            setFinalScore([gamePlayData.score[players.player1.name], gamePlayData.score[players.player2.name]]);

        setTimeout(() => {
            setIsDisabledBtn(false);
        }, 2000);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.winners}>
                <div className={styles.winner}>
                    <div className={styles.place}>
                        {finalScore[0] !== finalScore[1] ? '1' : ''}
                    </div>
                    <img
                        src={require('_assets/img/sections/medal.png')}
                        alt='medal'
                    />
                    <div className={styles.info}>
                        <h4>{finalScore[0] >= finalScore[1] ? players.player1?.name : players.player2?.name}</h4>
                        <div className={styles.infoScore}>
                            <LocalizedText path='arena/translation' name='score'/>: {finalScore[0] >= finalScore[1] ? finalScore[0] : finalScore[1]}
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.winner, finalScore[0] !== finalScore[1] && styles.winnerLoser)}>
                    <div className={styles.place}>
                        {finalScore[0] !== finalScore[1] ? '2' : ''}
                    </div>
                    <img
                        src={require('_assets/img/sections/medal.png')}
                        alt='medal'
                    />
                    <div className={styles.info}>
                        <h4>{finalScore[0] >= finalScore[1] ? players.player2?.name : players.player1?.name}</h4>
                        <div className={styles.infoScore}>
                            <LocalizedText path='arena/translation' name='score'/>: {finalScore[0] >= finalScore[1] ? finalScore[1] : finalScore[0]}
                        </div>
                    </div>
                </div>
            </div>
            <Btn
                type='primary'
                disabled={isDisabledBtn}
                className={classNames(styles.btn, styles.repeatBtn)}
                handler={handleRestartClick}
            >
                <LocalizedText path='arena/translation' name='repeat'/>
            </Btn>
            <Btn
                type='normal'
                disabled={isDisabledBtn}
                className={classNames(styles.btn, styles.exitBtn)} 
                handler={() => deleteAllGameData()}
            >
                <LocalizedText path='arena/translation' name='exit'/>
            </Btn>
        </div>
    );
};