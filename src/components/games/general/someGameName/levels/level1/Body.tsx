import React from 'react';
// import {setGameTimeout, clearGameTimeoutInterval} from 'amakids-games-utils-and-generations/lib/utils';
import {SomeGameNameT} from '../../type';
import {Btn} from '@components/common/elements';
import {NumberWrapper} from '@components/games/general/someGameName/levels/level1/parts';

export const Body = (p:SomeGameNameT) => {
    console.log('GameContent');
    const {initFinishPlaying, changeGPDOnline, game, speakTexts} = p;
    const {gamePlayData, gameData} = game;
    const {counter, clicksQty} = gamePlayData;

    // useEffect(() => {
    //     const {counter} = gamePlayData;
    //     let timeout = 0;
    //     const newCounter = counter + 1;
    //
    //     if (newCounter <= gameData.answersQty) {
    //         timeout = setGameTimeout(() => {
    //             console.log('tick');
    //
    //             // это действие будет запускаться в обоих пользователей, а значит, достаточно запустить initChangeGameplayData
    //             initChangeGameplayData({
    //                 counter: newCounter
    //             });
    //
    //         }, 1000);
    //     } else {
    //         clearGameTimeoutInterval(timeout);
    //         initFinishPlaying();
    //     }
    //
    //     return () => {
    //         console.log('clear');
    //         clearGameTimeoutInterval(timeout);
    //     };
    // }, [gamePlayData.counter]);

    const btnHandler = () => {
        const {clicksQty} = gamePlayData;

        /*
        это действие будет запускаться только в того, кто инициировал событие,
        и чтобы у другого пользователя тоже произошли изменения запускаем именно через changeGameplayDataWithSockets
        * */
        changeGPDOnline({
            clicksQty: clicksQty + 1
        });

        speakTexts({text: 'hello'});
    };

    return (
        <div>
            Body
            {p.game.gameConfig?.gameName}
            <div>gamePlayData clicksQty: <NumberWrapper counter={clicksQty}/></div>
            <p>gamePlayData counter: {counter}</p>
            <p>gameData: {gameData.clicksQty}</p>
            <Btn handler={btnHandler} textCode={'check'}/>
            <button onClick={initFinishPlaying}>Finish</button>
        </div>
    );
};