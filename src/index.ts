import 'rc-slider/assets/index.css';
import {setFavicon} from 'amakids-games-utils-and-generations/lib/utils';
import './scss/main.scss';

import {yaMetrika} from '@lib/metrika';
import '@lib/sentry-initter';

setFavicon(pathConfig.root2);
yaMetrika();

import './MainApp';
import {pathConfig} from '@global-config/path-config';
// import '@lib/game/utils/momentum';
