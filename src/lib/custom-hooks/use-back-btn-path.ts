import {useLocation} from 'react-router-dom';
import {pathConfig} from '@global-config/path-config';

export const useBackBtnPath = () => {
    const {pathname} = useLocation();

    const pathArr = pathname.split('/');

    pathArr.pop();

    const backBtnPath = pathArr.join('/');

    if (backBtnPath === pathConfig.base) {
        return pathConfig.root;
    }

    return backBtnPath ? backBtnPath : pathConfig.root;
};
