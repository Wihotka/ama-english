import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {WithBorGrad} from '@components/common/elements';
import {LocalizedText} from '@components/common';

import {Message} from './Message';

import {StudyStageLinkT} from '../../types';
import styles from './styles.scss';

type P = {
    link:StudyStageLinkT;
    progress:number | undefined;
    description:string | undefined;
    disabled:boolean;
    msg?:string;
};

export const StudyLink = ({link, progress, description, disabled, msg}:P) => {
    const {name, path, isExternal} = link;

    const content = (
        <WithBorGrad borderWidth={'1px'} className={styles.link}>
            <div className={styles.linkContent}>
                <p className={styles.title}><LocalizedText name={name} path={'study-stages/translation'}/></p>
                {disabled
                    ? <>
                        <Overlay/>
                        {description && <p className={styles.description}>{description}</p>}
                        <Bg/>
                        <img className={styles.linkImgDisabled} src={require(`/assets/img/studyStages/stageLinks/${name}.png`)} alt={'lock'}/>
                    </>
                    : <>
                        {msg && <Message msg={msg}/>}
                        {description && <p className={styles.description}>{description}</p>}
                        {!!progress && <Progress progress={progress}/>}
                        <Bg/>
                        <img className={styles.linkImg} src={require(`/assets/img/studyStages/stageLinks/${name}.png`)} alt={name}/>
                    </>}
            </div>
        </WithBorGrad>
    );

    const linkCn = disabled ? styles.disabledLink : '';

    return isExternal
        ? <a className={linkCn} href={path}>{content}</a>
        : <Link className={linkCn} to={path}>{content}</Link>;
};

const Progress = ({progress}:{ progress:number }) => (
    <div className={styles.progress}>
        <p className={styles.progressText}><LocalizedText name={'completed'} path={'study-stages/translation'}/> <span
            className={styles.progressNumber}>{`${progress}%`}</span></p>
        <div className={styles.lineWrap}>
            <div className={styles.line} style={{width: `${progress}%`}}/>
        </div>
    </div>
);

const Path = styled.path`
    fill: ${(props) => props.theme?.colors?.color6 };
}`;

const Bg = () => (
    <svg
        className={styles.linkBG}
        width={270}
        height={149}
        fill="none">
        <Path
            d="M0 149C56.5 33.5 120.5 9 271 0v117c0 17.673-14.327 32-32 32H0Z"
            fillOpacity={0.4}/>
    </svg>
);

const OverlayInfo = styled.div`
    background: ${(props) => props.theme.colors.color5 + 'CC' };
}`;

const Overlay = () => (
    <div className={styles.overlay}>
        <OverlayInfo className={styles.overlay__info}>
            <img src={require('/assets/img/studyStages/iconLock.png')} alt={'lock'}/>
            <p className={styles.overlay__text}>
                <LocalizedText name={'developing'} path={'study-stages/translation'}/>
            </p>
        </OverlayInfo>
    </div>
);