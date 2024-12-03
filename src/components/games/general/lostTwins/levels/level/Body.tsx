import React from 'react';

import {Content} from './content';

import {onFlipAllCard, onSelectCart, useCurrentStateGame} from './utils';

import {CardI, HandlerFlipAllCard, HandleSelectOption, LostTwinsT} from './type';

export const Body = (props:LostTwinsT) => {
    const {gamePlayData, gameData, gameSettings} = props.game;
    const {changeGPDOnline, initFinishPlaying, speakTexts} = props;

    useCurrentStateGame({gameData, gamePlayData, initFinishPlaying, changeGPDOnline, speakTexts, gameSettings});

    const handlerSelectCard:HandleSelectOption = (selectCard:CardI) => onSelectCart({
        selectCard,
        gameSettings,
        changeGPDOnline,
        gamePlayData
    });
    const handlerFlipAllCard:HandlerFlipAllCard = () => onFlipAllCard({changeGPDOnline});

    return (
        <Content gamePlayData={gamePlayData} gameData={gameData} handlerSelectCard={handlerSelectCard}
            gameSettings={gameSettings}
            handlerFlipAllCard={handlerFlipAllCard} />
    );
};
