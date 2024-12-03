import React, {useMemo} from 'react';
import {capitalize} from 'lodash';
import styled from 'styled-components';

import {InfoBtn} from '@components/common/game/components';
import {LocalizedText} from '@components/common';

import styles from './style.scss';

import {CaseP} from './../../../../../type';
import {classNames} from 'js-data-utils';

const Theme = styled.p`color: ${props => props.theme.colors.color2}`;
const LightOption = styled.span`color: ${props => props.theme.colors.color2}`;
const Transcription = styled.span`color: ${props => props.theme.colors.color2}`;

export const Case = ({card, answerStatus, handlePlayCB, currentOptionIndex, isPlayButtonPressed}:CaseP) => useMemo(() => {
    const getOptionClasses = (word:string) =>
        classNames(
            styles.options__item,
            answerStatus === 'success' && card.answer === word ? styles.options__itemSuccess : ''
        );

    const getSentenceClasses = () =>
        classNames(
            styles.sentence,
            answerStatus === 'success' ? styles.sentence__success : ''
        );

    const getSentenceAnswerClasses = () =>
        classNames(
            styles.sentenceAnswer,
            answerStatus === 'success' ? styles.sentenceAnswer__success : ''
        );

    return (
        <div className={styles.interactive}>
            {card.case === 'withImg' &&
                <img
                    src={card.img}
                    alt={card.answer}
                    className={styles.img} />}

            {card.case === 'withVoice' &&
                <>
                    <Theme className={styles.theme}>
                        <LocalizedText name={'controls.theme'} path={'settings/translation'} />:&nbsp;
                        <LocalizedText name={`values.${card.theme}`} path={'settings/translation'} /></Theme>
                    <InfoBtn
                        type={'play'}
                        sizeShadow={'big'}
                        disabled={isPlayButtonPressed}
                        isPressed={isPlayButtonPressed}
                        classNameBtn={styles.playBtnBig}
                        handler={() => handlePlayCB()} />
                </>
            }

            {card.case === 'withTranscription' &&
                <>
                    <Theme className={styles.theme}>
                        <LocalizedText name={'controls.theme'} path={'settings/translation'} />:&nbsp;
                        <LocalizedText name={`values.${card.theme}`} path={'settings/translation'} /></Theme>
                    <Transcription className={styles.transcription}>{card.transcription}</Transcription>
                </>
            }

            {card.case === 'withVoiceTranscription' &&
                <>
                    <Theme className={styles.theme}>
                        <LocalizedText name={'controls.theme'} path={'settings/translation'} />:&nbsp;
                        <LocalizedText name={`values.${card.theme}`} path={'settings/translation'} /></Theme>
                    <Transcription className={styles.transcription}>{card.transcription}</Transcription>
                    <InfoBtn
                        type={'play'}
                        sizeShadow={'small'}
                        disabled={isPlayButtonPressed}
                        isPressed={isPlayButtonPressed}
                        classNameBtn={styles.playBtnSmall}
                        handler={() => handlePlayCB()} />
                </>
            }

            {card.case === 'withSentenceFilling' &&
                <>
                    <div className={getSentenceClasses()}>
                        {card.sentence?.map((word, index) =>
                            <LightOption
                                key={index}
                                className={styles.sentenceWord}>
                                {word !== ''
                                    ? word + ' '
                                    : <span className={styles.optionWord}>
                                        <span className={styles.answer}/>
                                        ({card.words?.map((option, optionIndex, options) =>
                                            <span key={optionIndex}>
                                                {option}
                                                {optionIndex !== options.length - 1
                                                    ? <span className={styles.slash}>/</span>
                                                    : ''}
                                            </span>
                                        )})  </span>
                                }
                            </LightOption>
                        )}
                    </div>
                    <div className={getSentenceAnswerClasses()}>
                        {card.sentence?.map((word, index) =>
                            <LightOption className={styles.sentenceWord} key={index}>
                                {word === '' ? index === 0 ? capitalize(card.answer) + ' ' : card.answer + ' ' : word + ' '}</LightOption>
                        )}
                    </div>
                </>
            }

            {card.case === 'withSentenceMaking' &&
                <div className={styles.imgWrapper}>
                    <img
                        alt={card.answer}
                        className={styles.imgSmall}
                        src={require(`/assets/img/resources/${card.img}`)} />
                    <div className={styles.wordWrapper}>
                        {card.words?.map((word, index, words) =>
                            <LightOption
                                key={index}
                                className={styles.word}>
                                {word}
                                {index !== words.length - 1
                                    ? <span className={styles.slash}>/</span>
                                    : ''}
                            </LightOption>)}
                    </div>
                </div>}

            {card.case === 'withExtraWordSearching' &&
                <>
                    <Theme className={styles.theme}>
                        <LocalizedText name={'controls.theme'} path={'settings/translation'} />:&nbsp;
                        <LocalizedText name={`values.${card.theme}`} path={'settings/translation'} /></Theme>
                    <div className={styles.options}>
                        {card.words?.map((word, index) =>
                            <LightOption
                                key={index}
                                className={getOptionClasses(word)}>{capitalize(word)}</LightOption>)}
                    </div>
                </>}
        </div>
    );
}, [currentOptionIndex, isPlayButtonPressed, answerStatus]);
