import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

import {Content, GameRules, ModesList, UserInfo, GameFinish} from './content';
import {generateIGPD} from '@components/common/game/arena/utils';
import {startPlaying, deleteAllGameData, changeGameSettingsAndConfig} from '@reducers/game/dispatchers';

import {ArenaGame, ArenaInitialGameConfig, ArenaModes, InitialArenaGameProps} from '@custom-types';
import {StoreInner} from '@store';

type P = {
    gameName:string,
    config:ArenaInitialGameConfig
    // todo дать типизацию
    GameContent:(p:InitialArenaGameProps<any, any, any>) => JSX.Element,
    // todo дать типизацию
    generateGPD:Function,
    generateGD:Function
};

export const ArenaGameInner = (props:P) => {
    const {GameContent, config, gameName, generateGPD, generateGD} = props;
    // @ts-ignore
    const game:ArenaGame = useSelector((store:StoreInner) => store.game) as ArenaGame;
    const {status: {isRunGame, isPlaying, isFinishPlaying}, gameData, gamePlayData, gameSettings} = game;

    const isGameSettingsEmpty = isEmpty(gameSettings);
    const isGameDataEmpty = isEmpty(gameData);

    useEffect(() => {
        if (isRunGame) {
            changeGameSettingsAndConfig({
                gameConfig: config.gameConfig,
                gameSettings
            });

            startPlaying({
                ...generateIGPD({
                    mode: gameSettings.mode,
                    stepTime: config.gameConfig.stepTime,
                    players: gameData.players,
                    timer: gameSettings.mode === ArenaModes.online
                        ? config.gameConfig.timer?.online
                        : config.gameConfig.timer?.offline
                }),
                // todo типиз.
                ...generateGPD({gameData})
            });
        }
    }, [isRunGame]);

    // очищаем redux от данных при выходе в выбор игр
    useEffect(() => () => {
        deleteAllGameData();
    }, []);

    return (
        <>
            {isGameSettingsEmpty
                ? <ModesList modes={config.gameConfig.modes}/>
                : isGameDataEmpty
                    ? <UserInfo
                        config={config}
                        generateGD={generateGD}
                        mode={gameSettings.mode}
                    />
                    : (isPlaying && isRunGame)
                        ? <Content
                            gameData={gameData}
                            GameContent={GameContent}
                            gamePlayData={gamePlayData}
                            config={config}
                            mode={gameSettings.mode}
                        />
                        : isFinishPlaying
                            ? <GameFinish/>
                            : <GameRules
                                mode={gameSettings.mode}
                                gameName={gameName}
                            />
            }
        </>
    );
};