import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {classNames} from 'js-data-utils';

import {FeedbackForm} from './feedback-form';
import {FeedbackStatusMessage} from './feedback-status-message';

import {uploadFeedbackPlatform, uploadFeedbackGame} from '@lib/api-connector';
import {FeedbackFormData} from '@lib/api-connector/types';

import styles from './styles.scss';

type Props = {
    isOpenModal:boolean;
    gameName:string;
    timeClosedMessageMs?:number;
    callback?:Function;
};

type StatusModal = {
    isOpenWrap:boolean;
    isUpload:boolean;
    isOpenForm:boolean;
    isStatusUpload:boolean | null;
    isCloseModal:boolean;
};

type Form = {
    optionsValue:number | null;
    badReasons:string[];
    textValue:string;
};

export const FeedbackGroup:React.FC<Props> = (props) => {
    const {isOpenModal, gameName, timeClosedMessageMs, callback} = props;

    const [statusModals, setStatusModals] = useState<StatusModal>({
        isOpenWrap: isOpenModal,
        isOpenForm: isOpenModal,
        isUpload: false,
        isStatusUpload: null,
        isCloseModal: false,
    });
    const [isBadResponse, setIsBadResponse] = useState<boolean>(false);

    useEffect(() => setStatusModals({...statusModals, isOpenWrap: isOpenModal, isOpenForm: isOpenModal}), [isOpenModal]);

    if (timeClosedMessageMs) {
        setTimeout(() => {
            setStatusModals({...statusModals, isOpenWrap: false, isCloseModal: true});
        }, timeClosedMessageMs);
    }

    const onCloseModal = () => {
        setStatusModals({
            isOpenWrap: false,
            isOpenForm: false,
            isUpload: false,
            isStatusUpload: null,
            isCloseModal: true
        });
    };

    useEffect(() => {
        if (statusModals.isCloseModal) {
            callback && callback();
        }
    }, [statusModals.isCloseModal]);

    const onStatusUploadModal:(upload:boolean, status:boolean) => void = (upload, status) => {
        setStatusModals({...statusModals, isOpenForm: false, isUpload: upload, isStatusUpload: status});
    };

    const [form, setForm] = useState<Form>({optionsValue: null, badReasons: [], textValue: ''});

    const onSubmitForm = () => new Promise((resolve:(value:Form) => void) => {
        resolve(form);
    }).then((form) => {
        // Формируем тело ответа
        const data:FeedbackFormData = {
            name: gameName ?? 'platform',
            mark: form.optionsValue as number,
            badReasons: form.badReasons,
            comment: form.textValue
        };

        // Отправляем запрос
        if (gameName) uploadFeedbackGame(data);
        else uploadFeedbackPlatform(data);

        setForm({optionsValue: null, badReasons: [], textValue: ''});
        onStatusUploadModal(true, true);
    }).catch(() => {
        onStatusUploadModal(true, false);
    });

    const styleModalWrap = classNames(styles.feedbackWrap, statusModals.isOpenWrap && styles.active);

    return (
        <>
            <CSSTransition
                in={statusModals.isOpenWrap}
                timeout={1000}
                classNames={{
                    enter: styles.fadeEnterModal,
                    enterActive: styles.fadeEnterActiveModal,
                    exit: styles.fadeExitModal,
                    exitActive: styles.fadeExitActiveModal,
                }}
                unmountOnExit
            >
                <div className={styleModalWrap}>
                    <FeedbackForm
                        isOpenForm={statusModals.isOpenForm}
                        onCloseModal={onCloseModal}
                        form={form}
                        setForm={setForm}
                        onSubmitForm={onSubmitForm}
                        isPlatform={!gameName}
                        isBadResponse={isBadResponse}
                        setIsBadResponse={setIsBadResponse}
                    />
                    <FeedbackStatusMessage
                        isMessageUploadOpen={statusModals.isUpload}
                        statusUpload={statusModals.isStatusUpload}
                        onCloseModal={onCloseModal}
                        onSubmitForm={onSubmitForm}
                        isBadResponse={isBadResponse}
                    />
                </div>
            </CSSTransition>
        </>
    );
};

// OLD VERSION
// export const FeedbackGroup:React.FC<Props> = (props) => {
//     const {isOpenMessage, timeClosedMessageMs, callback} = props;

//     const [statusModals, setStatusModals] = useState<StatusModal>({
//         isOpenMessage,
//         isOpenWrap: false,
//         isOpenForm: false,
//         isUpload: false,
//         isStatusUpload: null,
//         isCloseModal: false,
//     });

//     useEffect(() => setStatusModals({...statusModals, isOpenMessage}), [isOpenMessage]);

//     if (timeClosedMessageMs) {
//         setTimeout(() => {
//             setStatusModals({...statusModals, isOpenMessage: false, isOpenWrap: false, isCloseModal: true});
//         }, timeClosedMessageMs);
//     }

//     const onCloseWrap = (e:React.MouseEvent<HTMLDivElement>) => {
//         if (e.target === e.currentTarget) {
//             setStatusModals({...statusModals, isOpenMessage: false, isOpenWrap: false, isCloseModal: true});
//         }
//     };

//     const onCloseModal = () => {
//         setStatusModals({
//             isOpenMessage: false,
//             isOpenWrap: false,
//             isOpenForm: false,
//             isUpload: false,
//             isStatusUpload: null,
//             isCloseModal: true
//         });
//     };

//     useEffect(() => {
//         if (statusModals.isCloseModal) {
//             callback && callback();
//         }
//     }, [statusModals.isCloseModal]);

//     const onStatusUploadModal:(upload:boolean, status:boolean) => void = (upload, status) => {
//         setStatusModals({...statusModals, isOpenForm: false, isUpload: upload, isStatusUpload: status});
//     };

//     const onOpenForm = () => setStatusModals({...statusModals, isOpenMessage: false, isOpenWrap: true, isOpenForm: true});

//     const onCloseMessage = () => setStatusModals({...statusModals, isOpenMessage: false, isOpenWrap: false, isCloseModal: true});

//     const styleModalWrap = classNames(styles.feedbackWrap, statusModals.isOpenWrap && styles.active);

//     return (
//         <>
//             <CSSTransition
//                 in={statusModals.isOpenMessage}
//                 timeout={1000}
//                 classNames={{
//                     enter: styles.fadeEnterMessage,
//                     enterActive: styles.fadeEnterActiveMessage,
//                     exit: styles.fadeExitMessage,
//                     exitActive: styles.fadeExitActiveMessage,
//                 }}
//                 unmountOnExit
//             >
//                 <FeedbackMessage
//                     onOpenForm={onOpenForm}
//                     onCloseMessage={onCloseMessage}
//                 />
//             </CSSTransition>
//             <div className={styleModalWrap} onClick={onCloseWrap}>

//                 <FeedbackForm
//                     isOpenForm={statusModals.isOpenForm}
//                     onStatusUploadModal={onStatusUploadModal}
//                     onCLoseModal={onCloseModal}
//                 />

//                 <FeedbackStatusMessage
//                     isMessageUploadOpen={statusModals.isUpload}
//                     statusUpload={statusModals.isStatusUpload}
//                     onCloseModal={onCloseModal}
//                 />

//             </div>
//         </>
//     );
// };