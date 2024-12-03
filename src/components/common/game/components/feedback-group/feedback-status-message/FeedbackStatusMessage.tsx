import React from 'react';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common';
import {Btn, CloseBtn} from '@components/common/elements';
import {pathConfig} from '@global-config/path-config';

import styles from './styles.scss';

type Props = {
    isMessageUploadOpen:boolean;
    statusUpload:boolean | null;
    onCloseModal:Function;
    onSubmitForm:() => Promise<void>;
    isBadResponse:boolean;
};

export const FeedbackStatusMessage:React.FC<Props> = (props) => {
    const {isMessageUploadOpen, statusUpload, onCloseModal, onSubmitForm, isBadResponse} = props;

    const contentTitle = statusUpload ? 'messageStatus.titleSuccess' : 'messageStatus.titleError';
    const contentBadText = statusUpload ? 'messageStatus.textBadResponse' : 'messageStatus.textError';
    const contentGoodText = statusUpload ? 'messageStatus.textGoodResponse' : 'messageStatus.textError';
    const contentBtn = statusUpload ? 'messageStatus.btnTextSuccess' : 'messageStatus.btnTextError';

    const stylesFieldMessage = classNames(styles.fieldMessage, isMessageUploadOpen && styles.view);

    return (
        <div className={stylesFieldMessage}>
            <h2 className={styles.title}>
                <LocalizedText
                    name={contentTitle}
                    path={'modals/feedback/translation'}/>
            </h2>
            <p className={styles.text}>
                {isBadResponse
                    ? <LocalizedText name={contentBadText} path={'modals/feedback/translation'}/>
                    : <LocalizedText name={contentGoodText} path={'modals/feedback/translation'}/>
                }
            </p>
            <div className={styles.imgWrap}>
                <img src={require('_assets/img/feedback/kami-happy.png')} alt='kami'/>
            </div>
            <div className={styles.btnContainer}>
                <Btn className={styles.btn} type={'primary'} handler={statusUpload ? onCloseModal : onSubmitForm}>
                    <LocalizedText name={contentBtn} path={'modals/feedback/translation'}/>
                </Btn>
                {!statusUpload && <Btn className={styles.btn} type={'normal'}>
                    <a href={pathConfig.support} target='_blank' rel='noopener'>
                        <LocalizedText name={'messageStatus.btnTextSupport'} path={'modals/feedback/translation'}/>
                    </a>
                </Btn>}
            </div>
            <CloseBtn className={styles.closeBtn} action={onCloseModal}/>
        </div>
    );
};