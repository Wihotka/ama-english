import React from 'react';
import Notification from 'rc-notification';
import 'rc-notification/assets/index.css';
import {NotificationInstance} from 'rc-notification/es/Notification';
import {classNames} from 'js-data-utils';

import {CustomIcon} from '@components/common/elements';

import styles from './style.scss';

let notification:NotificationInstance | null = null;

Notification.newInstance({style: {right: '1%', top: '10%'}}, (n) => notification = n);

export type NotificationProps = {
    type:'success'|'info'|'warning'|'error';
    msg:string;
    descr?:string;
};

const iconsResolver = {
    success: 'saved',
    info: 'info',
    warning: 'warning',
    error: 'error'
};

export const openNotificationWithIcon = (props:NotificationProps) => {
    const {msg, type, descr} = props;

    const iconType:any = iconsResolver[type];
    const className = classNames(styles.message__icon, styles.message__icon_notify, styles['message__icon_' + type]);

    notification && notification.notice({
        closable: true,
        duration: null,
        content: (
            <div className={styles.message}>
                <div className={className}>
                    <CustomIcon type={iconType}/>
                </div>
                <div>
                    <p className={styles.message__title}>{msg}</p>
                    {descr && <p>{descr}</p>}
                </div>
            </div>
        ),
    });
};