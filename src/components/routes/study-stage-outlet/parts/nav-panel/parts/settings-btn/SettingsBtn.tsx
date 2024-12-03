import React, {memo, useState} from 'react';
import {GlobalSettings, LocalizedText} from '@components/common';
import {Btn, CloseBtn, CustomIcon, Popover} from '@components/common/elements';
import styles from './styles.scss';

export const SettingsBtnC = () => {
    const [isOpen, toggleISOpen] = useState(false);

    return (
        <Popover
            isOpen={isOpen}
            positions={['bottom']}
            content={<Content hide={() => toggleISOpen(false)}/>}
            align={'end'}
            onClickOutside={() => toggleISOpen(false)}>
            <Btn isRound handler={() => toggleISOpen(isOpen => !isOpen)}><CustomIcon fillColor={'#fff'} style={{fontSize: '32px'}} type={'settings'} /></Btn>
        </Popover>
    );
};

export const SettingsBtn = memo(SettingsBtnC);

type CP = {
    hide:Function;
};

const Content = ({hide}:CP) =>
    <div className={styles.contentWrap}>
        <div className={styles.content}>
            <p className={styles.title}>
                <LocalizedText name={'settings'} path={'base-interface/translation'} useSuspense={false} />
                <span className={styles.close}><CloseBtn action={hide} /></span>
            </p>
            <GlobalSettings />
        </div>
    </div>;
