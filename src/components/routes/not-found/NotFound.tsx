import React from 'react';

import {Btn} from '@components/common/elements';
import {LocalizedText} from '@components/common/localized-text';

import styles from './styles.scss';
import {NavLink} from 'react-router-dom';
import {pathConfig} from '@global-config/path-config';

export default () => {

    document.body.style.background = `url(${require('/assets/img/studyStages/pageBg.png')}) repeat 0% 0% `;

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.content}>
                <div className={styles.textWrap}>
                    <p className={styles.title}><LocalizedText name={'pageNotFound'} path={'error/translation'} /></p>
                    <p className={styles.text}><LocalizedText name={'pageMoved'} path={'error/translation'} />.</p>
                    <img className={styles.img} src={require('/assets/img/interface/404.png')} alt={'404'}/>
                </div>
                <div className={styles.buttons}>
                    {/*<Btn*/}
                    {/*    textCode={'reloadPage'}*/}
                    {/*    type={'primary'}*/}
                    {/*    handler={() => window.location.reload()}/>*/}
                    {/*<a href={'/'}></a>*/}
                    <NavLink to={pathConfig.level}><Btn textCode={'toTheMain'}/></NavLink>
                </div>
            </div>
        </div>
    );
};
