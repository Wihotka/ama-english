import {StoreInner} from '@store';

const nativeLangCode = (store:StoreInner) => store.metadata.common.settings.langCode;
const user = (store:StoreInner) => store.metadata.common.user;
const sections = (store:StoreInner) => store.metadata.sections;
const metadata = (store:StoreInner) => store.metadata;

export const metadataSelectors = {
    nativeLangCode,
    user,
    sections,
    metadata
};