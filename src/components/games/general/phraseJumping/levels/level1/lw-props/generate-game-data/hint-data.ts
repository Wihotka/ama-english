import {ThemePhraseJumping} from '@custom-types';
import {HintContent, TypeTextHint} from './../../type';

export const onHintData = (theme:ThemePhraseJumping):HintContent => {
    const pattern = {
        affirmative: [],
        negative: [],
        question: [],
        comparative: [],
        superlative: [],
        there: [],
        fewLittle: [],
        futureContinuous: [],
        presentPerfectContinuous: [],
        pastPerfect: []
    };

    return theme === ThemePhraseJumping.presentSimple ? {
        ...pattern,
        affirmative: [
            [
                {text: 'I/You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'DO ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'DOES ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'presentSimpleAffirmativeContent3part1', type: TypeTextHint.normal, isLocalized: true},
                {text: 'S', type: TypeTextHint.strong, isLocalized: false},
                {text: 'presentSimpleAffirmativeContent3part2', type: TypeTextHint.normal, isLocalized: true}
            ]
        ],
        negative: [
            [
                {text: 'I/You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'DO NOT (DON’T) ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'DOES NOT (DOESN’T) ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ],
        question: [
            [
                {text: 'DO + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'I/you/we/they ... ?', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'DOES + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'he/she/it ... ?', type: TypeTextHint.strong, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.toBe ? {
        ...pattern,
        affirmative: [
            [
                {text: 'I + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'AM ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It +', type: TypeTextHint.normal, isLocalized: false},
                {text: 'IS ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ARE ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ],
        negative: [
            [
                {text: 'I + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'AM NOT ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'IS NOT (ISN’T) ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ARE NOT (AREN’T) ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ],
        question: [
            [
                {text: 'AM ', type: TypeTextHint.strong, isLocalized: false},
                {text: '+ I ... ?', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'IS ', type: TypeTextHint.strong, isLocalized: false},
                {text: '+ he/she/it ... ?', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'ARE ', type: TypeTextHint.strong, isLocalized: false},
                {text: '+ you/we/they ... ?', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.thereIsAre ? {
        ...pattern,
        there: [
            [
                {text: 'One thing → ', type: TypeTextHint.normal, isLocalized: false, title: 'There is/There are'},
                {text: 'THERE IS ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'Two or more things → ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'THERE ARE ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.formsOfAdjectives ? {
        ...pattern,
        comparative: [
            [
                {text: 'Short word (1-2 syllables) → ', type: TypeTextHint.normal, isLocalized: false, title: 'Comparative form'},
                {text: 'ADJ. + -ER ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(tall - tall', type: TypeTextHint.normal, isLocalized: false},
                {text: 'er', type: TypeTextHint.strong, isLocalized: false},
                {text: ')', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'Short word (1-2 syllables) ending in ', type: TypeTextHint.normal, isLocalized: false},
                {text: '-Y ', type: TypeTextHint.strong, isLocalized: false},
                {text: '→ ', type: TypeTextHint.normal, isLocalized: false},
                {text: '-Y CHANGES TO -I +ER ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(happy - happ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ier', type: TypeTextHint.strong, isLocalized: false},
                {text: ')', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'Long word (2 or more syllables) → ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'MORE + ADJ. ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(beautiful - ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'more ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'beautiful)', type: TypeTextHint.normal, isLocalized: false}
            ]
        ],
        superlative: [
            [
                {text: 'Short word (1-2 syllables) → ', type: TypeTextHint.normal, isLocalized: false, title: 'Superlative form'},
                {text: 'ADJ. + -EST ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(tall - tall', type: TypeTextHint.normal, isLocalized: false},
                {text: 'est', type: TypeTextHint.strong, isLocalized: false},
                {text: ')', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'Short word (1-2 syllables) ending in ', type: TypeTextHint.normal, isLocalized: false},
                {text: '-Y ', type: TypeTextHint.strong, isLocalized: false},
                {text: '→ ', type: TypeTextHint.normal, isLocalized: false},
                {text: '-Y CHANGES TO -I +EST ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(happy - happ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'iest', type: TypeTextHint.strong, isLocalized: false},
                {text: ')', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'Long word (2 or more syllables) → ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'THE MOST + ADJ. ', type: TypeTextHint.strong, isLocalized: false},
                {text: '(beautiful - ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'the most ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'beautiful)', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.verbHave ? {
        ...pattern,
        affirmative: [
            [
                {text: 'I/You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'HAVE GOT ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'HAS GOT ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ],
        negative: [
            [
                {text: 'I/You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'HAVE NOT GOT (HAVEN’T GOT) ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'HAS NOT GOT (HASN’T GOT) ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ],
        question: [
            [
                {text: 'HAVE + ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'I/You/We/They + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'GOT ...', type: TypeTextHint.strong, isLocalized: false}
            ],
            [
                {text: 'HAS + ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'He/She/It + ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'GOT ...', type: TypeTextHint.strong, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.fewLittle ? {
        ...pattern,
        fewLittle: [
            [
                {text: 'Countable noun → ', type: TypeTextHint.normal, isLocalized: false, title: 'A few / a little'},
                {text: 'A FEW', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. I/have/', type: TypeTextHint.normal, isLocalized: false},
                {text: 'a few-a little', type: TypeTextHint.strong, isLocalized: false},
                {text: '/bananas. - I have ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'a few ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'bananas', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'Uncountable noun → ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'A LITTLE', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. I/have/', type: TypeTextHint.normal, isLocalized: false},
                {text: 'a few-a little', type: TypeTextHint.strong, isLocalized: false},
                {text: '/water. - I have ', type: TypeTextHint.normal, isLocalized: false},
                {text: 'a little ', type: TypeTextHint.strong, isLocalized: false},
                {text: 'water', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.futureContinuous ? {
        ...pattern,
        futureContinuous: [
            [
                {text: 'I / You / He / She / It / We / They', type: TypeTextHint.normal, isLocalized: false, title: 'Future Continuous'},
                {text: ' + will be + V + ing', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. They', type: TypeTextHint.normal, isLocalized: false},
                {text: ' will be', type: TypeTextHint.strong, isLocalized: false},
                {text: ' wait', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ing', type: TypeTextHint.strong, isLocalized: false},
                {text: ' for us.', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.presentPerfectContinuous ? {
        ...pattern,
        presentPerfectContinuous: [
            [
                {text: 'I / You / We / They', type: TypeTextHint.normal, isLocalized: false, title: 'Present Perfect Continuous'},
                {text: ' + have been + V + ing', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. I', type: TypeTextHint.normal, isLocalized: false},
                {text: ' have been', type: TypeTextHint.strong, isLocalized: false},
                {text: ' wait', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ing', type: TypeTextHint.strong, isLocalized: false},
                {text: ' for you.', type: TypeTextHint.normal, isLocalized: false}
            ],
            [
                {text: 'He / She / It', type: TypeTextHint.normal, isLocalized: false},
                {text: ' + has been + V + ing', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. He', type: TypeTextHint.normal, isLocalized: false},
                {text: ' has been', type: TypeTextHint.strong, isLocalized: false},
                {text: ' wait', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ing', type: TypeTextHint.strong, isLocalized: false},
                {text: ' for us.', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : theme === ThemePhraseJumping.pastPerfect ? {
        ...pattern,
        pastPerfect: [
            [
                {text: 'I / You / He / She / It / We / They', type: TypeTextHint.normal, isLocalized: false, title: 'Past Perfect'},
                {text: ' + had + V(3)', type: TypeTextHint.strong, isLocalized: false},
                {text: 'br', type: TypeTextHint.strong, isLocalized: false},
                {text: 'E.G. I', type: TypeTextHint.normal, isLocalized: false},
                {text: ' had gone', type: TypeTextHint.strong, isLocalized: false},
                {text: ' to work. I', type: TypeTextHint.normal, isLocalized: false},
                {text: ' had', type: TypeTextHint.strong, isLocalized: false},
                {text: ' work', type: TypeTextHint.normal, isLocalized: false},
                {text: 'ed', type: TypeTextHint.strong, isLocalized: false},
                {text: ' a lot.', type: TypeTextHint.normal, isLocalized: false}
            ]
        ]
    } : pattern;
};