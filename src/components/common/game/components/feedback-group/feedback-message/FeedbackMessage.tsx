import React from 'react';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common';
import {Btn, CloseBtn} from '@components/common/elements';

import styles from './styles.scss';

type Props = {
    onOpenForm:Function;
    onCloseMessage:Function;
};

export const FeedbackMessage:React.FC<Props> = (props) => {
    const {onOpenForm, onCloseMessage} = props;

    const styleField = classNames(styles.messageField);

    return (
        <div className={styleField}>
            <h2 className={styles.messageTitle}>
                <LocalizedText name={'message.title'} path={'modals/feedback/translation'}/>
            </h2>
            <p className={styles.messageText}>
                <LocalizedText name={'message.text'} path={'modals/feedback/translation'}/>
            </p>
            <Btn type="primary" className={styles.btn} handler={onOpenForm}>
                <LocalizedText name={'message.btnText'} path={'modals/feedback/translation'}/>
            </Btn>
            <CloseBtn className={styles.btnClose} action={onCloseMessage}/>
        </div>
    );
};

