import React from 'react';
import styled from 'styled-components';
import {classNames} from 'js-data-utils';

import {LocalizedText} from '@components/common';

import {HintFieldP} from './../../../type';

import styles from './styles.scss';

const HintFieldWrapper = styled.div`
  background: ${props => props.theme.colors.gradient12};
  
  &::before {
    background-color: ${props => props.theme.colors.color5 + '3D'};
  }
`;

export const HintField:React.FC<HintFieldP> = (props) => {
    const {hintContent, hintType, isOpenHint} = props;

    const hintTypesWithIcon = ['affirmative', 'negative', 'question'];
    const hintTypesWithTitle = [
        'there',
        'comparative',
        'superlative',
        'fewLittle',
        'futureContinuous',
        'presentPerfectContinuous',
        'pastPerfect'
    ];

    const styleLetter = (type:string) => classNames(styles.letter, styles[`letter_${type}`]);
    const styleField = classNames(styles.hintField, isOpenHint && styles.view);

    const transferredHintTypes = ['fewLittle', 'futureContinuous', 'presentPerfectContinuous', 'pastPerfect'];

    return (
        <HintFieldWrapper className={styleField}>
            <div className={styles.hintContent}>
                {hintTypesWithIcon.includes(hintType) &&
                    <img className={styles.image}
                        src={require(`/assets/img/sections/general/phraseJumping/hint-icons/${hintType}-icon.png`)}
                        alt="#"/>}

                {hintTypesWithTitle.includes(hintType) &&
                    // @ts-ignore
                    <p className={styles.hintTitle}>{hintContent[hintType][0][0].title}</p>}

                <div className={styles.textField}>
                    {hintContent[hintType].map((content, index) =>
                        <div className={styles.sentence} key={index} style={transferredHintTypes.includes(hintType) ? {maxWidth: '600px'} : {}}>
                            {content.map(letterObj => letterObj.text === 'br' ? <span className={styles.break} />
                                : <p className={styleLetter(letterObj.type)} key={letterObj.text}>

                                    {letterObj.isLocalized
                                        ? <LocalizedText
                                            name={letterObj.text}
                                            path={'games/general/phraseJumping/static/translation'}/>
                                        : letterObj.text
                                    }
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </HintFieldWrapper>
    );
};