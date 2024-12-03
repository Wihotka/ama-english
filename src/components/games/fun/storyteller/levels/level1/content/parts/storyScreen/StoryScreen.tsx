import {Storyteller_UserAnswer} from '../../../../../type';
import React from 'react';
import styles from './style.scss';
import styled from 'styled-components';

type StoryScreenP = {
    storyText:string;
    userAnswers:Storyteller_UserAnswer[];
    imageBg:string;
    storyTitle:string;
};

const TextScrollContainer = styled.div`
    scrollbar-color: ${({theme}) => `${theme.colors.color5} #FFFFFF`};

    &::-webkit-scrollbar {
        background: ${({theme}) => theme.colors.color5 + 40 };
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.color5};
    }
`;

export const StoryScreen = ({
    storyText,
    userAnswers,
    imageBg,
    storyTitle
}:StoryScreenP) => (
    <div className={styles.storyScreenContainer}>
        <TextScrollContainer className={styles.storyTextScroll}>
            <div className={styles.storyTextTitle}>{storyTitle}</div>
            <div className={styles.storyText}>{storyText}</div>  
        </TextScrollContainer>
        <div className={styles.storyUserAnswers}>
            {userAnswers.map(
                (answer, i) =>
                    answer && (
                        <div key={i} className={styles.storyAnswerItem} style={{background: imageBg}}>
                            <img
                                src={require(`/assets/img/sections/fun/storyteller/${answer.imgPath}`)}
                                alt={answer.value}
                            />
                        </div>
                    )
            )}
        </div>
    </div>
);
