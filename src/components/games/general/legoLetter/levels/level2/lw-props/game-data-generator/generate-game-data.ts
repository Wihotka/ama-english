import {shuffle, random} from 'lodash';

import {lowercase, uppercase} from '../../../../letters';

import {GenerateGDCB} from '@custom-types';
import {LegoLetterGameL2T} from '../../type';

export const generateGameData:GenerateGDCB<LegoLetterGameL2T> = async ({gameSettings}) => {
    const {answersQty} = gameSettings;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const animalImagesQty = 16;
    const data = [];

    while (data.length < answersQty) {
        const mainCardLetterIsCapital = Math.random() < 0.5;
        const currentLetter = shuffle(alphabet)[0];
        const currentImageId = random(0, animalImagesQty - 1);

        const wrongLetters = shuffle(alphabet.filter(letter => letter !== currentLetter)).slice(0, 2);
        const wrongImagesId:Array<number> = [];

        while (wrongImagesId.length < 2) {
            const newImageId = random(0, animalImagesQty - 1);

            if (newImageId !== currentImageId && !wrongImagesId.includes(newImageId)) {
                wrongImagesId.push(newImageId);
            }
        }

        const getLetterData = (letter:string, isCapital:boolean) => {
            const {unifiedPath, height, width} = isCapital ? uppercase[letter.toUpperCase()] : lowercase[letter];

            return {unifiedPath, height, width};
        };

        data.push({
            cards: shuffle([...wrongLetters, currentLetter].map((letter, index) => ({
                letter: mainCardLetterIsCapital ? letter : letter.toUpperCase(),
                path: getLetterData(letter, !mainCardLetterIsCapital).unifiedPath,
                height: getLetterData(letter, !mainCardLetterIsCapital).height,
                width: getLetterData(letter, !mainCardLetterIsCapital).width,
                imgName: `${mainCardLetterIsCapital ? 'young' : 'adult'}/${[...wrongImagesId, currentImageId][index]}`,
                isCorrect: letter === currentLetter
            }))),
            path: getLetterData(currentLetter, mainCardLetterIsCapital).unifiedPath,
            height: getLetterData(currentLetter, mainCardLetterIsCapital).height,
            width: getLetterData(currentLetter, mainCardLetterIsCapital).width,
            currentLetter: mainCardLetterIsCapital ? currentLetter.toUpperCase() : currentLetter,
            currentImgName: `${mainCardLetterIsCapital ? 'adult' : 'young'}/${currentImageId}`
        });
    }

    return {data};
};
