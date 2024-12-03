import {InitialGameProps} from '@custom-types/game';
import {
    GrammarTime_GameData,
    GrammarTime_GameConfig,
    GrammarTime_SettingsTemplate,
    GrammarTime_GamePlayData_Common,
} from '../../type';

export type GrammarTimeL1T = InitialGameProps<
    GrammarTime_GameConfig,
    GrammarTime_SettingsTemplate,
    GrammarTime_GameData,
    GrammarTimeL1_GamePlayData
>;

export type GrammarTimeGameL1T = GrammarTimeL1T['game'];

export type GrammarTimeL1_GamePlayData = GrammarTime_GamePlayData_Common & {
    correctAnswersQty:number;
};
