import React from 'react';
import {render} from 'react-dom';
import {App} from '@components/app';
// import {App} from '@components/app';

render(
    <App/>,
    document.querySelector('#app')
);

// число символов для локализации
// const pathLocalise = [
//     '',
//     'base-interface',
//     'buttons',
//     'challenge',
//     'error',
//     'games',
//     'games/fun',
//     'games/fun/makeYourChoice',
//     'games/fun/makeYourChoice/static',
//     'games/fun/powerCouple',
//     'games/fun/secretCode',
//     'games/fun/storyteller',
//     'games/fun/wordSalad',
//     'games/general',
//     'games/general/airWord',
//     'games/general/airWord/static',
//     'games/general/alphabet',
//     'games/general/breakTheSpell',
//     'games/general/buildMe',
//     'games/general/checkpoint',
//     'games/general/checkpoint/static',
//     'games/general/clickItEasy',
//     'games/general/clickItEasy/static',
//     'games/general/colourfulPhonetics',
//     'games/general/echoChamber',
//     'games/general/echoChamber/static',
//     'games/general/fruitSmoothie',
//     'games/general/grammarMix',
//     'games/general/grammarTime',
//     'games/general/guessTheSound',
//     'games/general/guessWhat',
//     'games/general/itsMatch',
//     'games/general/legoLetter',
//     'games/general/levitation',
//     'games/general/lostTwins',
//     'games/general/navigation',
//     'games/general/perfectPairs',
//     'games/general/phraseJumping',
//     'games/general/phraseJumping/static',
//     'games/general/sortOut',
//     'games/general/textTeaser',
//     'games/general/timeline',
//     'games/general/wordBox',
//     'games/general/wordBuilder',
//     'games/general/wordpad',
//     'games/general/worndNLetters',
//     'games/general/yesnt',
//     'games/general/yesnt/static',
//     'games/tags',
//     'modals',
//     'modals/feedback',
//     'modals/mobileGameExit',
//     'settings',
//     'settings-info/fun',
//     'settings-info/general',
//     'study-stages'
// ];

// interface JSONValue {
//     [key:string]:JSONValue | string;
// }

// export async function countCharactersInJSON():Promise<{ [key:string]:number }> {
//     const result:{ [key:string]:number } = {};
//     let allSymbols = 0;

//     for (const file of pathLocalise) {
//         const path = `locales/ru/${file}/translation.json`;
//         const name = file || 'main';

//         result[`${name}`] = await countChars(path);
//         allSymbols += +result[`${name}`];
//     }

//     console.log(result);
//     console.log(allSymbols);

//     return result;
// }

// async function countChars(path:string) {
//     const jsonData:JSONValue = await (await fetch(path)).json();
//     let count = 0;

//     function traverse(obj:JSONValue) {
//         for (const value of Object.values(obj)) {
//             if (typeof value === 'string') {
//                 count += value.length;
//             } else if (typeof value === 'object') {
//                 traverse(value);
//             }
//         }
//     }

//     traverse(jsonData);

//     return count;
// }

// (async () => await countCharactersInJSON())();
