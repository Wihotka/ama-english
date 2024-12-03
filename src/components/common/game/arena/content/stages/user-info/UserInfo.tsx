import React, {FormEvent, useEffect, useState} from 'react';
import {classNames} from 'js-data-utils';

import {staticEngData} from '@lib/game/static-data';
import {LocalizedText} from '@components/common';
import {getWords} from '@lib/game/utils';
import {setPageTitle} from '@reducers/page-title/dispatchers';
import {ArenaModes, ArenaPlayersInfo, ArenaInitialGameConfig} from '@custom-types';
import {addGD, useLocal, botNames} from '../../../utils';
import {Btn} from '@components/common/elements';

import styles from './styles.scss';

export type P = {
    mode:ArenaModes,
    config:ArenaInitialGameConfig
    generateGD:Function
};

export const UserInfo = (props:P) => {
    const {mode, config, generateGD} = props;

    const isOnline = mode === ArenaModes.online;

    const title = useLocal(`${mode}.name`);
    const inputPlaceholderText = useLocal('inputPlaceholder');

    useEffect(() => {
        setPageTitle(title);
    }, [title]);

    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);

    const [players, setPlayers] = useState<ArenaPlayersInfo>({
        player1: {name: '', avatar: '0'},
        player2: {name: isOnline ? botNames[getRandomNum(0, botNames.length - 1)] : '', avatar: isOnline ? `${getRandomNum(0, 9)}` : '1'}
    });

    const [avatarsPlayerIndex, setAvatarsPlayerIndex] = useState<number|null>(null);

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        setPlayers({
            ...players,
            [e.currentTarget.name]: {
                ...players[e.currentTarget.name as keyof ArenaPlayersInfo],
                name: e.currentTarget.value
            }
        });
    };

    const initGD = async () => {
        addGD({
            // todo дать типизацию для generateGD
            game: await generateGD({gameSettings: config.gameSettings, staticEngData, getWords}),
            players: players
        });
    };

    const handleAvatarClick = (index:number) => setAvatarsPlayerIndex(index);

    const handleSelectAvatar = (player:string, avatar:number) => {
        setPlayers({
            ...players,
            [player]: {
                ...players[player as keyof ArenaPlayersInfo],
                avatar: `${avatar}`
            }
        });
        setAvatarsPlayerIndex(null);
    };

    useEffect(() => {
        const isNamesAreFulled = isOnline ? players.player1?.name : players.player1?.name && players.player2?.name;
        const isSameNames = players.player1?.name === players.player2?.name;

        if (isNamesAreFulled && !isSameNames) setIsDisabledBtn(false);
        else setIsDisabledBtn(true);
    }, [players]);

    return (
        <>
            <div className={styles.userInfo}>
                <h2 className={styles.userTitle}>
                    <LocalizedText path={'arena/translation'} name={`${mode}.inputLabel`}/>
                </h2>
                {isOnline
                    ? <div className={classNames(styles.userContent, styles.userContentOnline)}>
                        {new Array(1).fill('').map((_player, playerIndex) => 
                            <div key={playerIndex} className={styles.userBlock}>
                                <button className={styles.userAvatar} onClick={() => handleAvatarClick(playerIndex)}>
                                    <img
                                        src={require(`_assets/img/sections/arena/avatars/${players[`player${playerIndex + 1}` as keyof ArenaPlayersInfo]?.avatar}.png`)}
                                        alt='mode'
                                    />
                                </button>
                                <div
                                    className={classNames(
                                        styles.userAllAvatars,
                                        (avatarsPlayerIndex === null || avatarsPlayerIndex !== playerIndex) &&
                                            styles.userAllAvatarsHide
                                    )}
                                >
                                    {new Array(10).fill('').map((_avatar, avatarIndex) => 
                                        <button
                                            key={avatarIndex}
                                            className={styles.userAvatar}
                                            onClick={() => handleSelectAvatar(`player${playerIndex + 1}`, avatarIndex)}
                                        >
                                            <img src={require(`_assets/img/sections/arena/avatars/${avatarIndex}.png`)} alt={`avatar${avatarIndex}`}/>
                                        </button>
                                    )}
                                </div>
                                <input
                                    type='text'
                                    name={'player1'}
                                    placeholder={inputPlaceholderText}
                                    value={players.player1?.name}
                                    maxLength={10}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                    </div>
                    : <div className={styles.userContent}>
                        {new Array(2).fill('').map((_player, playerIndex) => 
                            <div key={playerIndex} className={styles.userBlock}>
                                <button className={styles.userAvatar} onClick={() => handleAvatarClick(playerIndex)}>
                                    <img
                                        src={require(`_assets/img/sections/arena/avatars/${players[`player${playerIndex + 1}` as keyof ArenaPlayersInfo]?.avatar}.png`)}
                                        alt='mode'
                                    />
                                </button>
                                <div
                                    className={classNames(
                                        styles.userAllAvatars,
                                        (avatarsPlayerIndex === null || avatarsPlayerIndex !== playerIndex) &&
                                            styles.userAllAvatarsHide
                                    )}
                                >
                                    {new Array(10).fill('').map((_avatar, avatarIndex) => 
                                        <button
                                            key={avatarIndex}
                                            className={styles.userAvatar}
                                            onClick={() => handleSelectAvatar(`player${playerIndex + 1}`, avatarIndex)}
                                        >
                                            <img src={require(`_assets/img/sections/arena/avatars/${avatarIndex}.png`)} alt={`avatar${avatarIndex}`}/>
                                        </button>
                                    )}
                                </div>
                                <input
                                    type='text'
                                    name={`player${playerIndex + 1}`}
                                    placeholder={`${inputPlaceholderText} ${playerIndex + 1}`}
                                    value={players[`player${playerIndex + 1}` as keyof ArenaPlayersInfo]?.name}
                                    maxLength={10}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                    </div>
                }
                {
                    players.player1?.name &&
                    players.player2?.name &&
                    players.player1?.name === players.player2?.name && <p className={styles.nicknamesError}>
                        <LocalizedText path={'arena/translation'} name={'nicknamesError'}/>
                    </p>
                }
            </div>
            <Btn type='primary' disabled={isDisabledBtn} className={styles.nextBtn} handler={initGD}>
                <LocalizedText path={'arena/translation'} name={'next'}/>
            </Btn>
        </>
    );
};

const getRandomNum = (min:number, max:number) => Math.round(Math.random() * (max - min) + min);
