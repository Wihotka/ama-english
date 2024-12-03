import {InitialGameProps} from '@custom-types/game';
import {
    GrammarTime_GameConfig,
    GrammarTime_GameData,
    GrammarTime_GamePlayData_Common,
    GrammarTime_SettingsTemplate,
} from '../../type';

export type GrammarTimeL2T = InitialGameProps<
    GrammarTime_GameConfig,
    GrammarTime_SettingsTemplate,
    GrammarTime_GameData,
    GrammarTimeL2_GamePlayData
>;

export type GrammarTimeGameL2T = GrammarTimeL2T['game'];

export type GrammarTimeL2_GamePlayData = GrammarTime_GamePlayData_Common & {
    firstTryCorrectAnswersQty:number;
    secondTryCorrectAnswersQty:number;
    correctIndexes:number[];
};
