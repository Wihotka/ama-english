import {bindActions} from '../utils';
import {actions} from './reducer';

export const setPageTitle = (title:string, setForDocument = true) => {

    if (setForDocument) {
        document.title = title;
        setDocumentTitle(title);
    }

    setMainTitle(title);
};

export const setDocumentTitle = (title:string) => {
    document.title = `English | ${title}`;
};

export const {setMainTitle, setSubTitle} = bindActions(actions);
