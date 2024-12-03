import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from 'js-data-utils';
import styled from 'styled-components';

import {Section, Main} from './parts';

import styles from './styles.scss';
import {StoreInner} from '@store';

const PreloaderWrap = styled.div`
    background: ${(props) => props.theme?.colors?.gradient3 || '#fff' };
}`;

export const Preloader = () => {
    const isShowLoader = useSelector((store:StoreInner) => store.preloader.isShow);
    // const {name} = useSelector((store:StoreInner) => store.subject);
    const [isShow, setIsShow] = useState(isShowLoader);
    const {studyStage} = useSelector((store:StoreInner) => store.subjectInfo);

    useEffect(() => {
        if (isShowLoader) {
            setIsShow(true);
        } else {
            setTimeout(() => {
                setIsShow(prev => {

                    if (!isShowLoader) return false;

                    return !prev;
                });
            }, 1000);
        }
    }, [isShowLoader]);

    if (!isShow) {
        return null;
    }

    const preloaderClass = classNames(
        styles.preloader,
        (!isShowLoader && styles.preloader_hide),
        (studyStage ? styles.preloader_section : styles.preloader_main)
    );

    return (
        <PreloaderWrap className={preloaderClass}>
            <PreloaderContent studyStage={studyStage} />
        </PreloaderWrap>
    );
};

const PreloaderContent = ({studyStage}:{studyStage:number}) => (
    <div className={styles.content} >
        {studyStage ? <Section studyStage={studyStage}/> : <Main/>}
    </div>
);

// const getWidthAndHeight = (windowDimensions:ReturnType<typeof useWindowDimensions>, maxWidth:number, maxHeight:number) => {
//     const {width, height} = windowDimensions;
//
//     if (width >= maxWidth && height >= maxHeight) return {width: maxWidth, height: maxHeight};
//
//     const coef = maxHeight / maxWidth;
//
//     return {
//         width: height / coef,
//         height
//     };
// };