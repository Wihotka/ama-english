import {classNames} from 'js-data-utils';
import React from 'react';
import {SecretCode_Task} from '../../../../../type';
import {AlphabetImage} from '../alphabetImage';
import styles from './style.scss';

type TaskP = {
    task:SecretCode_Task;
    isImage:boolean;
    isSmile:boolean;
};

export const Task = ({task, isImage, isSmile}:TaskP) => {
    const taskLetterClassName = classNames(
        styles.taskLetterContainer,
        isImage ? styles.taskImage : ''
    );
    const alphabetImageStyle:React.CSSProperties = isSmile ? {} : {padding: 0};

    return (
        <div className={styles.taskContainer}>
            {task.map(({value, color}, i) => (
                <div
                    key={i}
                    className={taskLetterClassName}
                    style={{background: isImage ? 'none' : color}}
                >
                    {isImage ? (
                        <AlphabetImage isSmile={isSmile} i={value} style={alphabetImageStyle} />
                    ) : (
                        value + 1
                    )}
                </div>
            ))}
        </div>
    );
};
