import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import React from 'react';
import {SecretCodeT, SecretCode_GamePlayData} from '../../type';
import {Content} from './content';
import {
    ChangeActiveInputT,
    ChangeMapVisibilityT,
    ChangeUserAnswersT,
    HandleCorrectAnswerT,
    HandleIncorrectAnswerT,
} from './type';

export const Body = ({
    game,
    changeGPD,
    speakTexts,
    initFinishPlaying,
}:SecretCodeT) => {
    const {gameData, gamePlayData, gameSettings, gameConfig} = game;
    const {imagesPaths} = gameConfig;
    const {words} = gameData;
    const {
        userAnswers,
        iterationCount,
        mistakesQty,
        correctAnswersQty,
        isMapOpen,
        activeInputIndex,
    } = gamePlayData;
    const {mode, level} = gameSettings;

    const changeMapVisibility:ChangeMapVisibilityT = (newValue) => {
        changeGPD<SecretCode_GamePlayData>({isMapOpen: newValue});
    };

    const changeActiveInput:ChangeActiveInputT = (newIndex) => {
        const {word} = words[iterationCount];

        if (typeof newIndex === 'number') {
            changeGPD<SecretCode_GamePlayData>({
                activeInputIndex: newIndex,
            });
        } else if (newIndex === 'next') {
            changeGPD<SecretCode_GamePlayData>({
                activeInputIndex:
                    activeInputIndex === word.length - 1
                        ? activeInputIndex
                        : activeInputIndex + 1,
            });
        } else {
            changeGPD<SecretCode_GamePlayData>({
                activeInputIndex:
                    activeInputIndex === 0
                        ? activeInputIndex
                        : activeInputIndex - 1,
            });
        }
    };

    const changeUserAnswers:ChangeUserAnswersT = (newValue, index) => {
        changeGPD<SecretCode_GamePlayData>({
            userAnswers: userAnswers.map((l, i) =>
                i === index ? newValue.toLowerCase() : l
            ),
        });
    };

    const checkAnswer = () => {
        const {word, soundUrl} = words[iterationCount];
        const mistakeIndexes = userAnswers
            .map((v, i) => (v !== word[i] ? i : null))
            .filter((v):v is number => typeof v === 'number');
        const isCorrect = !mistakeIndexes.length;
        const iterationChange = isCorrect || mistakesQty === 2;
        const isLastIteration
            = iterationChange && iterationCount === words.length - 1;

        changeGPD<SecretCode_GamePlayData>({
            mistakeIndexes,
            highlight: true,
            correctAnswersQty: isCorrect
                ? correctAnswersQty + 1
                : correctAnswersQty,
        });

        if (isLastIteration) {
            if (isCorrect) {
                speakTexts({
                    text: '',
                    path: soundUrl,
                    onFinishPlaying: initFinishPlaying,
                });
            } else {
                setGameTimeout(initFinishPlaying, 1000);
            }
        } else {
            if (isCorrect) {
                handleCorrectAnswer(soundUrl);
            } else {
                handleIncorrectAnswer(iterationChange, word);
            }
        }
    };

    const handleCorrectAnswer:HandleCorrectAnswerT = (soundUrl) => {
        speakTexts({
            text: '',
            path: soundUrl,
            onFinishPlaying: () =>
                changeGPD<SecretCode_GamePlayData>({
                    iterationCount: iterationCount + 1,
                    userAnswers: new Array(
                        words[iterationCount + 1].word.length
                    ).fill(''),
                    isMapOpen: mode === 'hard' ? false : isMapOpen,
                    highlight: false,
                    mistakeIndexes: [],
                    mistakesQty: 0,
                    activeInputIndex: 0,
                }),
        });
    };

    const handleIncorrectAnswer:HandleIncorrectAnswerT = (
        iterationChange,
        word
    ) => {
        const newUserAnswers = iterationChange
            ? new Array(words[iterationCount + 1].word.length).fill('')
            : userAnswers.map((v, i) => (v === word[i] ? v : ''));

        setGameTimeout(
            () =>
                changeGPD<SecretCode_GamePlayData>({
                    mistakesQty: iterationChange ? 0 : mistakesQty + 1,
                    userAnswers:
                        mistakesQty === 0 ? userAnswers : newUserAnswers,
                    iterationCount: iterationChange
                        ? iterationCount + 1
                        : iterationCount,
                    isMapOpen:
                        mode === 'hard'
                            ? iterationChange
                                ? false
                                : isMapOpen
                            : isMapOpen,
                    mistakeIndexes: [],
                    highlight: false,
                    activeInputIndex: iterationChange ? 0 : activeInputIndex,
                }),
            1000
        );
    };

    return (
        <Content
            gameData={gameData}
            gamePlayData={gamePlayData}
            mode={mode}
            level={level}
            imagesPaths={imagesPaths}
            changeMapVisibility={changeMapVisibility}
            changeActiveInput={changeActiveInput}
            changeUserAnswers={changeUserAnswers}
            checkAnswer={checkAnswer}
        />
    );
};
