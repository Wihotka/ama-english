import React from 'react';
import {classNames} from 'js-data-utils';
import {MemoryBoard_Card} from '../../../type';
import styles from './style.scss';

type Props = {
    card:MemoryBoard_Card;
    onSelectCard:(selectCard:any) => any;
};

export const Card = React.memo(({card, onSelectCard}:Props) => {
    const handleClick = () => {
        if (!card.isDisabled) onSelectCard(card);
    };

    return <button onClick={handleClick} className={classNames(styles.card, card.isHidden && styles.cardHidden)}>
        <div className={classNames(styles.cardContent, card.isFlipped && styles.cardRotated)}>
            <div className={styles.cardBack}>
                {card.type === 'image'
                    ? <img src={card.content} alt='card img'/>
                    : <span>{card.content}</span>
                }
            </div>
            <div className={styles.cardFront}>
                <img src={require('_assets/img/sections/arena/memoryBoard/card.svg')} alt='card'/>
            </div>
        </div>
        {card.word}
    </button>;
});