import {HomeworkDataResp, SingleGameDataResp} from '@lib/api-connector';
import {GamesSection} from '@games-info';

//todo оновити типи з врахуванням масиву
export type SingleGameData = SingleGameDataResp<GamesSection>;

export type HomeworkData = HomeworkDataResp<GamesSection>;
