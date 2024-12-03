import {bindActions} from '../utils';
import {actions} from './reducer';

export const {setVolume, setOldVolume, setMuted} = bindActions(actions);
