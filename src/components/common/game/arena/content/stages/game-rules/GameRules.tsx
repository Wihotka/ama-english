import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from 'js-data-utils';

import {Btn} from '@components/common/elements';
import {LocalizedText} from '@components/common';
import {runGame} from '@reducers/game/dispatchers';
import {setPageTitle} from '@reducers/page-title/dispatchers';
import {ArenaModes} from '@custom-types';
import {StoreInner} from '@store';
import {useLocal, generateOnlineDelay} from '../../../utils';

import styles from './styles.scss';

export type GameRulesP = {
    gameName:string
    mode:ArenaModes
};

type Player = {
    name:string;
    avatar:string;
};

type GameData = {
    words:{};
    players:{
        player1?:Player;
        player2?:Player;
    };
};

export const GameRules = (props:GameRulesP) => {
    const {gameName, mode} = props;

    const gameData:GameData = useSelector((store:StoreInner) => store.game.gameData) as GameData;
    const {players} = gameData;

    const isOnline = mode === ArenaModes.online;

    const [isOnlineDelay, setIsOnlineDelay] = useState<boolean>(isOnline ? true : false);

    const title = useLocal(isOnlineDelay ? 'waiting' : 'rules');

    useEffect(() => {
        setTimeout(() => {
            setIsOnlineDelay(false);
        }, generateOnlineDelay());
    }, []);

    useEffect(() => {
        setPageTitle(title);
    }, [title]);

    return (
        <>
            <div className={styles.players}>
                <div className={classNames(styles.player, styles.playerOne)}>
                    <img
                        src={require(`_assets/img/sections/arena/avatars/${players.player1?.avatar}.png`)}
                        alt='player1'
                    />
                    <h4>{players.player1?.name}</h4>
                </div>
                <img src={require('_assets/img/sections/versus.png')} alt='versus'/>
                <div className={classNames(styles.player, styles.playerTwo)}>
                    {!isOnlineDelay
                        ? <>
                            <img
                                src={require(`_assets/img/sections/arena/avatars/${players.player2?.avatar}.png`)}
                                alt='player2'
                            />
                            <h4>{players.player2?.name !== '' ? players.player2?.name : 'Гандон'}</h4>
                        </>
                        : <div className={styles.loader}/>
                    }
                </div>
            </div>
            <div className={styles.rulesInfo}>
                <h2 className={styles.rulesTitle}><LocalizedText path='arena/translation' name='rules'/></h2>
                <p className={styles.rulesDescription}><LocalizedText path={`games/arena/${gameName}/translation`} name={`taskName.${mode}`}/></p>
                <h4 className={styles.rulesTime}><LocalizedText path={`games/arena/${gameName}/translation`} name={`time.${mode}`}/></h4>
            </div>
            <Btn type='primary' disabled={isOnlineDelay} className={styles.nextBtn} handler={() => runGame()}>
                <LocalizedText path='arena/translation' name='play'/>
            </Btn>
        </>
    );
};