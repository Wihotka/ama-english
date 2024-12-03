import {useState, useEffect, useRef} from 'react';

import {setGameTimeout} from 'amakids-games-utils-and-generations/lib/utils';
import {onCheckingSelectCards} from './';

export const useCurrentStateGame = (params:any) => {
    const {gamePlayData, gameData, changeGPDOnline, initFinishPlaying, gameConfig, isOnline} = params;
    const {cardsData} = gameData;
    const {selectedCard, cards, isAllFlipCard, stepBy, score} = gamePlayData;

    const stepByRef = useRef(null);

    const [botStep, setBotStep] = useState<number>(0);

    useEffect(() => {
        let interval:any;

        function init() {
            const myFunction = function() {
                doSomething();
                const rand = Math.round(Math.random() * (8000 - 500)) + 10000;

                interval = setTimeout(myFunction, rand);
            };

            myFunction();
        }

        function doSomething() {
            setBotStep(prev => prev += 1);
        }

        init();

        return () => {
            clearTimeout(interval);
        };
    }, []);

    useEffect(() => {
        if (isOnline && botStep > 1) changeGPDOnline({
            score: {...score, [gameData.players.player2.name]: score[gameData.players.player2.name] + 2}
        });
    }, [botStep]);

    useEffect(() => {
        if (isOnline && score[gameData.players.player2.name] >= 24) initFinishPlaying();
    }, [score]);

    // useEffect(() => {
    //     setGameTimeout(() => changeGPDOnline({
    //         secondsNowGame: secondsNowGame + 1
    //     }), 1000);
    // }, [secondsNowGame]);

    useEffect(() => {
        if (!isAllFlipCard) return;

        changeGPDOnline({
            cards: cards.map((card:any) => ({...card, isFlipped: true, isDisabled: true}))
        });

        setGameTimeout(() => {
            changeGPDOnline({
                cards: cards.map((card:any) => ({...card, isFlipped: false, isDisabled: false})),
                isAllFlipCard: false
            });
        }, 5000);
    }, [isAllFlipCard]);

    useEffect(() => {
        const statusOpenCard = cards.map((card:any) => ({...card, isFlipped: false, isDisabled: false}));

        setGameTimeout(() => {
            changeGPDOnline({
                cards: statusOpenCard,
                isStartFlip: false
            });
        }, gameConfig.timerDelay * 1000);

    }, [cardsData]);

    useEffect(() => {
        onCheckingSelectCards({gamePlayData, changeGPDOnline});
    }, [selectedCard]);

    useEffect(() => {
        if (cards.every((card:any) => card.isCorrect)) {
            setTimeout(() => {
                initFinishPlaying();
            }, 500);
        }
    }, [cards]);

    useEffect(() => {
        if (stepByRef.current) {
            const statusOpenCard = cards.map((card:any) => (card.isCorrect
                ? {...card}
                : {...card, isFlipped: false, isDisabled: false}
            ));

            setGameTimeout(() => {
                changeGPDOnline({
                    cards: statusOpenCard,
                    isStartFlip: false,
                    selectedCard: {first: null, second: null}
                });
            }, 0);
        }

        stepByRef.current = stepBy;
    }, [stepBy]);

    // setGameTimeout(() => {
    //     initFinishPlaying();
    // }, 5000);
};