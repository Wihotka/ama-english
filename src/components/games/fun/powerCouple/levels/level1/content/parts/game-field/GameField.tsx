import React from 'react';

import {Card} from '../';

import {GameFieldP} from '../../../type';

import styles from './styles.scss';

export const GameField:React.FC<GameFieldP> = (props) => {
    const {mainField, isCardFlip, isAllDisabledCard, handlerSelectCard} = props;

    return (
        <div className={styles.map}>
            {mainField.map((field, numberField) =>
                <div
                    className={styles.field}
                    key={numberField}
                >
                    {field.map((line, numberLine) =>
                        line.map((card, indexCard) => card
                            ? <Card
                                card={card}
                                key={card.id}

                                numberField={numberField}
                                positionLine={numberLine}
                                positionCell={indexCard}

                                isCardFlip={isCardFlip}
                                isAllDisabledCard={isAllDisabledCard}
                                handlerSelectCard={handlerSelectCard}
                            />
                            : null
                        )
                    )}
                </div>
            )}
        </div>
    );
};