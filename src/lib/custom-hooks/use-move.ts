import {useNavigate} from 'react-router';

import {pathConfig} from '@global-config/path-config';

export const useMoveToHomework = () => {
    const navigate = useNavigate();

    return () => navigate(`${pathConfig.base}/level/${pathConfig.challenge}`);
};

export const useMoveToBase = () => {
    const navigate = useNavigate();

    return () => navigate('/');
};
