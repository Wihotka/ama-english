import React from 'react';
import {classNames} from 'js-data-utils';

import {Btn} from '@components/common/elements';

import {BtnFieldP} from './../../../type';

import styles from './styles.scss';

export const BtnField:React.FC<BtnFieldP> = (props) => {
    const {
        handlerCentralPositionCard,
        handleMixingCards,
        handlerHelp,
        disabledMixingCard,
        isMixinBtn,
        isBtnMixLighting,
        isHelpBtnDisabled
    } = props;

    const styleBtn = classNames(styles.btn);
    const styleBtnMix = classNames(styles.btn, isBtnMixLighting && styles.active);

    const handleClick = () => !disabledMixingCard && isMixinBtn ? handleMixingCards() : handlerCentralPositionCard();

    return (
        <div className={styles.fieldBtn}>

            <Btn
                handler={handlerHelp}
                className={styleBtn}
                disabled={isHelpBtnDisabled}
            >
                Help
            </Btn>

            <Btn
                className={styleBtnMix}
                handler={handleClick}
                disabled={disabledMixingCard}
            >
                {isMixinBtn ? 'Mix' : 'Center'}
            </Btn>
        </div>
    );
};