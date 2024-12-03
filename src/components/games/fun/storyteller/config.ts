import {ControlNames} from '@custom-types/game';
import {Storyteller_Config, StoryTypeT} from './type';

export const config:Storyteller_Config = {
    gameConfig: {
        displayedSettings: ['storyType'],
        valuesThresholds: [100, 100, 100],
        bgColor: 'linear-gradient(150.05deg, #AE8CC0 -9.61%, #6A567A 106.15%)'
    },
    settingsTemplate: {
        level: {
            min: 1,
            max: 1,
            step: 1,
            needHideControl: true,
        },
        storyType: {
            values: [
                'fairyTale',
                'horror',
                'adventure',
                'fantasy',
                'detective',
                'sciFi',
            ],
            controlName: ControlNames.carousel,
        },
    },
};

export const storyTitleResolver:{ [k in StoryTypeT]:string } = {
    adventure: 'Adventure Story',
    detective: 'Detective story',
    fairyTale: 'Fairy Story',
    fantasy: 'Fantasy Story',
    horror: 'Horror Story',
    sciFi: 'Science Fiction Story',
};
