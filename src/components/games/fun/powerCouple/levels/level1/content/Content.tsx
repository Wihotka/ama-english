import React from 'react';

import {BtnField, GameField} from './parts';

import {ContentP} from './../type';

import styles from './styles.scss';

export const Content:React.FC<ContentP> = (props) => {
    const {
        mainField,
        handleMixingCards,
        cards,

        handlerHelp,
        handlerSelectCard,
        handlerCentralPositionCard,

        isCardFlip,
        isAllDisabledCard,
        isHelpBtnDisabled,
        isBtnMixLighting
    } = props;

    const visibilityBtnPositionCenter = cards.length <= 2;

    return (
        <section className={styles.content}>
            <GameField
                mainField={mainField}
                handlerSelectCard={handlerSelectCard}

                isCardFlip={isCardFlip}
                isAllDisabledCard={isAllDisabledCard}/>

            <BtnField
                disabledMixingCard={isCardFlip || isHelpBtnDisabled}

                handlerHelp={handlerHelp}
                handleMixingCards={handleMixingCards}
                handlerCentralPositionCard={handlerCentralPositionCard}

                isMixinBtn={!visibilityBtnPositionCenter}
                isHelpBtnDisabled={isHelpBtnDisabled}
                isBtnMixLighting={isBtnMixLighting}
            />
        </section>
    );
};