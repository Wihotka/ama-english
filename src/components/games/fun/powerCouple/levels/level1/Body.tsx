import React from 'react';

import {Content} from './content';

import {useGame, onMixingCards, onSelectCard, onCentralPositionCards, onHelp} from './utils';

import {HandlerSelectCardT, PowerCoupleT} from './type';
import {compact, flattenDeep} from 'lodash';

export const Body = (props:PowerCoupleT) => {
    const {changeGPDOnline, initFinishPlaying} = props;
    const {gamePlayData} = props.game;
    const {
        mainField,
        selectCards,
        gridSelectMap,
        cards,
        isCardFlip,
        isAllDisabledCard,
        isHelpBtnDisabled,
        isBtnMixLighting
    } = gamePlayData;

    useGame({selectCards, cards, gridSelectMap, mainField, changeGPDOnline, initFinishPlaying});

    const handlerHelp = () => onHelp({cards: compact(flattenDeep(mainField)), changeGPDOnline});

    const handleMixingCards = () => onMixingCards({cards, gridSelectMap, changeGPDOnline});

    const handlerSelectCard:HandlerSelectCardT = (card) => onSelectCard({
        selectCard: card,
        selectCards,
        cards,
        changeGPDOnline
    });

    const handlerCentralPositionCard = () => onCentralPositionCards({changeGPDOnline});

    return (
        <Content
            mainField={mainField}
            cards={cards}

            handlerHelp={handlerHelp}
            handleMixingCards={handleMixingCards}
            handlerSelectCard={handlerSelectCard}
            handlerCentralPositionCard={handlerCentralPositionCard}

            isCardFlip={isCardFlip}
            isAllDisabledCard={isAllDisabledCard}
            isHelpBtnDisabled={isHelpBtnDisabled}
            isBtnMixLighting={isBtnMixLighting}
        />
    );
};
