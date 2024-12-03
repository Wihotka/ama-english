import {bindActions} from '../utils';
import {actions} from './reducer';

export const {setMetadata} = bindActions(actions);
