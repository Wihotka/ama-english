import React from 'react';

import {changeGPDOnline, changeGPD, initFinishPlaying} from '@lib/game/actions';
import {InitialArenaGameProps, ArenaInitialGameConfig, ArenaModes} from '@custom-types';
import {SidePanel, MainTimer} from './parts';

import styles from './styles.scss';

// todo рефакт.
type P = {
    GameContent:(p:InitialArenaGameProps<any, any, any>) => JSX.Element;
    gameData:InitialArenaGameProps<any, any, any>['game']['gameData'];
    gamePlayData:InitialArenaGameProps<any, any, any>['game']['gamePlayData'];
    config:ArenaInitialGameConfig;
    mode:ArenaModes;
};

export const Content = (props:P) => {
    const {GameContent, gameData, gamePlayData, config, mode} = props;
    const {gameConfig} = config;

    const isOnline = mode === ArenaModes.online;

    const initProps:InitialArenaGameProps<any, any, any> = {
        // @ts-ignore
        game: {
            gameData,
            gamePlayData,
            gameConfig,
            isOnline
        },
        // @ts-ignore
        initFinishPlaying,
        // @ts-ignore
        changeGPD,
        // @ts-ignore
        changeGPDOnline,
    };

    const {timer, stepTime} = gamePlayData;

    // todo рефакт.
    const sidePanelData = [
        {
            name: gameData.players.player1.name,
            avatar: gameData.players.player1.avatar,
            score: gamePlayData.score[`${gameData.players.player1.name}`]
        },
        {
            name: gameData.players.player2.name,
            avatar: gameData.players.player2.avatar,
            score: gamePlayData.score[`${gameData.players.player2.name}`]
        }
    ];

    const switchPlayer = () => {
        const nextPlayer = gamePlayData.stepBy === gameData.players.player1.name
            ? gameData.players.player2.name
            : gameData.players.player1.name;

        changeGPDOnline({
            stepBy: nextPlayer
        });
    };

    return (
        <div className={styles.gameContent}>
            <MainTimer
                time={timer}
                delay={gameConfig.timerDelay}
                finishGame={initFinishPlaying}
            />
            <SidePanel
                switchPlayer={switchPlayer}
                gameTime={stepTime}
                gameDelay={gameConfig.timerDelay}
                name={sidePanelData[0].name}
                rivalName={sidePanelData[1].name}
                avatar={sidePanelData[0].avatar}
                score={sidePanelData[0].score}
                stepBy={gamePlayData.stepBy}
                isOnline={isOnline}
                isFirstPlayer={true}
            />
            <GameContent {...initProps}/>
            <SidePanel
                switchPlayer={switchPlayer}
                gameTime={stepTime}
                name={sidePanelData[1].name}
                rivalName={sidePanelData[0].name}
                avatar={sidePanelData[1].avatar}
                score={sidePanelData[1].score}
                stepBy={gamePlayData.stepBy}
                isOnline={isOnline}
                isFirstPlayer={false}
            />
        </div>
    );
};
