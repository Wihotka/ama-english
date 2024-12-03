import React from 'react';
import {useSelector} from 'react-redux';

import {Btn} from '@components/common/elements';
import {LocalizedText} from '@components/common/localized-text';

import styles from './styles.scss';
import {pathConfig} from '@global-config/path-config';
import {ButtonsLang} from '@custom-types';
import {StoreInner} from '@store';

export default () => {
    const [path, text]:[string, keyof ButtonsLang] = window.location.pathname === `/${pathConfig.level}` ? ['/', 'exit'] : [pathConfig.level, 'toTheMain'];

    const {studyStage} = useSelector((store:StoreInner) => store.subjectInfo);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.content}>
                <div className={styles.textWrap}>
                    <p className={styles.title}><LocalizedText name={'somethingWrong'} path={'error/translation'} /></p>
                    <p className={styles.text}><LocalizedText name={'platformError'} path={'error/translation'} />.</p>
                    <p className={styles.text}><LocalizedText name={'tryReloadPage'} path={'error/translation'} />.</p>
                    <img className={styles.img} src={require(`/assets/img/studyStages/errorKami${studyStage}.png`)} alt={'error'}/>
                </div>
                <div className={styles.buttons}>
                    <Btn
                        textCode={'reloadPage'}
                        type={'primary'}
                        className={styles.btn}
                        handler={() => window.location.reload()}/>
                    <a href={path}><Btn className={styles.btn} textCode={text}/></a>
                </div>
            </div>
        </div>
    );
};
