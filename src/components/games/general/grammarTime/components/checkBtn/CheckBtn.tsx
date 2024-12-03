import React from 'react';
import {Btn} from '@components/common/elements';

import {GrammarTime_VariantElement} from '../../type';

import styles from './style.scss';

type CheckBtnP = {
    userElements:(GrammarTime_VariantElement | null)[];
    isDragDisabled:boolean;
    onClick:() => void;
};

export const CheckBtn = ({userElements, isDragDisabled, onClick}:CheckBtnP) => {
    const isBtnDisabled = userElements.some((e) => e === null);

    return (
        <div className={styles.btnContainer}>
            <Btn
                handler={onClick}
                disabled={isDragDisabled || isBtnDisabled}
                className={styles.checkBtn}
                type='primary'
                textCode='check'
            />
        </div>
    );
};
