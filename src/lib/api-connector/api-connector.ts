import axios from 'axios';
import {ApiConnector as ApiConnectorBase} from 'amakids-subjects-api-connector/lib/api-connector';
import {RequestBody, FeedbackFormData} from './types';

import {globalConfig} from '@global-config/global';
import {pathConfig} from '@global-config/path-config';

import {moveToRoot} from '@lib/redirect';
import {openNotificationWithIcon} from '@lib/message';

export const ApiConnector = ApiConnectorBase.getInstance({
    isIsolated: globalConfig.isIsolated,
    apiHost: globalConfig.apiHost,
    homeworkPath: pathConfig.homework,
    moveToRoot: moveToRoot,
    openNotificationWithIcon: openNotificationWithIcon
});

export const uploadFeedbackPlatform = async (data:FeedbackFormData) => {
    const method = 'get';
    const url = globalConfig.apiHost + '?action=student_interface_send_feedback';

    const requestBody:RequestBody = {
        method,
        url,
        withCredentials: true,
        params: {
            appCode: 1,
            subjectID: 13,
            type: 'platform',
            data
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    return axios(requestBody);
};

export const uploadFeedbackGame = async (data:FeedbackFormData) => {
    const method = 'get';
    const url = globalConfig.apiHost + '?action=student_interface_send_feedback';

    const requestBody:RequestBody = {
        method,
        url,
        withCredentials: true,
        params: {
            appCode: 1,
            subjectID: 13,
            type: 'game',
            data
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    return axios(requestBody);
};
