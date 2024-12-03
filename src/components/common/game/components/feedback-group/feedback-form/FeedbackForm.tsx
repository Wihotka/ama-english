import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import styled, {css} from 'styled-components';
import {classNames} from 'js-data-utils';

import {Btn, CloseBtn} from '@components/common/elements';
import {LocalizedText} from '@components/common';

import styles from './styles.scss';

type Form = {
    optionsValue:number | null;
    badReasons:string[];
    textValue:string;
};

type Props = {
    isOpenForm:boolean;
    onCloseModal:Function;
    form:Form;
    setForm:React.Dispatch<React.SetStateAction<Form>>;
    onSubmitForm:() => Promise<void>;
    isPlatform:boolean;
    isBadResponse:boolean;
    setIsBadResponse:React.Dispatch<React.SetStateAction<boolean>>;
};

type ReasonOption = {
    id:number;
    name:string;
    status:boolean;
};

const initBadGameReasons:ReasonOption[] = [
    {id: 1, name: 'difficult', status: false},
    {id: 2, name: 'boring', status: false},
    {id: 3, name: 'performance', status: false}
];

const initBadPlatformReasons:ReasonOption[] = [
    {id: 1, name: 'appearance', status: false},
    {id: 2, name: 'orientation', status: false},
    {id: 3, name: 'comment', status: false}
];

const Icon = styled.span<{ type:string, isSelected:boolean }>`
  background-image: url(assets/img/feedback/smiles/normal/${props => props.type}.png);

  &:hover {
    background-image: url(assets/img/feedback/smiles/select/${props => props.type}.png);
  }

  ${props => props.isSelected && css`
    background-image: url(assets/img/feedback/smiles/select/${props.type}.png);
  `}
`;

export const FeedbackForm:React.FC<Props> = (props) => {
    const {onCloseModal, isOpenForm, form, setForm, onSubmitForm, isPlatform, isBadResponse, setIsBadResponse} = props;
    const {t} = useTranslation('modals/feedback/translation');

    // const [isBadResponse, setIsBadResponse] = useState<boolean>(false);
    const [badReasons, setBadReasons] = useState<ReasonOption[]>(isPlatform ? initBadPlatformReasons : initBadGameReasons);

    const localizedPlaceholder = t('form.textareaPlaceholder');

    const onChangeOption = (e:React.ChangeEvent<HTMLInputElement>) => setForm({...form, optionsValue: +e.target.value});
    // const onChangeCourse = (e:React.ChangeEvent<HTMLInputElement>) => setForm({...form, courseOptionsValue: +e.target.value});
    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => setForm({...form, textValue: e.target.value});

    const stylesForm = classNames(styles.feedbackForm, isOpenForm && styles.view, isBadResponse && styles.feedbackFormBad);

    const isDisabledSubmit = !badReasons.some(obj => obj.status);

    const handleReason = (option:ReasonOption) => {
        const anotherReasons = badReasons.filter(obj => obj.name !== option.name);
        const newArr = [{id: option.id, name: option.name, status: !option.status}, ...anotherReasons]
            .sort((a, b) => a.id > b.id ? 1 : -1);

        setBadReasons(newArr);
    };

    useEffect(() => {
        if (form.optionsValue && form.optionsValue !== 1) onSubmitForm();
        else if (form.optionsValue && form.optionsValue === 1) setIsBadResponse(true);
    }, [form]);

    // Добавляем в форму
    useEffect(() => {
        const newArr = badReasons.map(reason => reason.status ? reason.name : '').filter(str => str.length);

        setForm({...form, badReasons: newArr});
    }, [badReasons]);

    return (
        <div className={stylesForm}>
            <h2 className={classNames(styles.title, styles.titleBad)}>
                {!isBadResponse
                    ? isPlatform
                        ? <LocalizedText name={'form.titleCourse'} path={'modals/feedback/translation'}/>
                        : <LocalizedText name={'form.titleGame'} path={'modals/feedback/translation'}/>
                    : <LocalizedText name={'form.titleBad'} path={'modals/feedback/translation'}/>
                }
            </h2>
            {!isBadResponse
                ? <p className={styles.subtitle}>
                    {isPlatform
                        ? <LocalizedText name={'form.subtitleCourse'} path={'modals/feedback/translation'}/>
                        : <LocalizedText name={'form.subtitleGame'} path={'modals/feedback/translation'}/>
                    }
                </p>
                : <div className={styles.reasonBlock}>
                    <ul className={styles.reasonList}>
                        {badReasons.map(option => (
                            <li key={option.id}>
                                <label className={styles.checkbox}>
                                    <input type='checkbox' onClick={() => handleReason(option)}/>
                                    <span/>
                                    <LocalizedText name={`form.reason.${option.name}`} path={'modals/feedback/translation'}/>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div className={classNames(styles.imgWrap, styles.reasonImg)}>
                        <img src={require('_assets/img/feedback/kami-sad.png')} alt='kami'/>
                    </div>
                </div>
            }
            {!isBadResponse
                ? <div className={styles.optionsField}>
                    <label className={styles.label}>
                        <input className={styles.input} type="radio" value="1" name="gameOptionsValue" onChange={onChangeOption}/>
                        <Icon
                            className={styles.imageSmiles}
                            type={'1'}
                            isSelected={form.optionsValue === 1}
                        />
                    </label>

                    <label className={styles.label}>
                        <input className={styles.input} type="radio" value="2" name="gameOptionsValue" onChange={onChangeOption}/>
                        <Icon
                            className={styles.imageSmiles}
                            type={'2'}
                            isSelected={form.optionsValue === 2}
                        />
                    </label>

                    <label className={styles.label}>
                        <input className={styles.input} type="radio" value="3" name="gameOptionsValue" onChange={onChangeOption}/>
                        <Icon
                            className={styles.imageSmiles}
                            type={'3'}
                            isSelected={form.optionsValue === 3}
                        />
                    </label>
                </div>
                : <div className={styles.commentBlock}>
                    <div className={styles.textField}>
                        <h3 className={styles.optionTitle}>
                            <LocalizedText name={'form.optionTitleTextarea'} path={'modals/feedback/translation'}/>
                        </h3>
                        <textarea
                            className={styles.textarea}
                            value={form.textValue}
                            placeholder={localizedPlaceholder}
                            maxLength={500}
                            onChange={onChangeTextarea}
                        />
                    </div>
                    <div className={classNames(styles.imgWrap, styles.commentImg)}>
                        <img src={require('_assets/img/feedback/kami-sad.png')} alt='kami'/>
                    </div>
                </div>
            }
            {isBadResponse &&
                <Btn className={styles.btnSubmit} type={'primary'} handler={onSubmitForm} disabled={isDisabledSubmit}>
                    <LocalizedText name={'form.btnSubmit'} path={'modals/feedback/translation'}/>
                </Btn>
            }
            <CloseBtn className={styles.closeBtn} action={onCloseModal}/>
        </div>
    );
};