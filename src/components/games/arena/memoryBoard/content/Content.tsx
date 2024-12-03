import React from 'react';
import {onSelectCard, useCurrentStateGame} from '../utils';
import {MemoryBoardT, MemoryBoard_Card} from '../type';
import {Card} from './parts';
import styles from './styles.scss';

type Data = {
    // words:any[];
    cards:MemoryBoard_Card[];
};

export const Content = (p:MemoryBoardT) => {
    const {game, changeGPDOnline, initFinishPlaying} = p;
    const {gameData, gamePlayData, gameConfig, isOnline} = game;
    const {cards}:Data = game.gamePlayData as any;

    useCurrentStateGame({gameData, gamePlayData, initFinishPlaying, changeGPDOnline, gameConfig, isOnline});

    const handleSelectCard = (selectCard:any) => onSelectCard({
        selectCard,
        changeGPDOnline,
        gamePlayData
    });

    return (
        <div className={styles.gameContent}>
            <div className={styles.cardList}>
                {cards.map(card => <div key={card.id}>
                    <Card card={card} onSelectCard={handleSelectCard}/>
                </div>)}
            </div>
        </div>
    );
};