import {Yesnt_Level1Task} from '../../../type';

export const isLevel1Task = (obj:any):obj is Yesnt_Level1Task =>
    obj.textTitle !== undefined; 
