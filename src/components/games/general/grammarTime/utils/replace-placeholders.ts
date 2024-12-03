import {sample} from 'lodash';

type ReplacePlaceholdersP = {
    text:string;
    placeholders:string[];
    seen:string[];
};

export const replacePlaceholders = ({
    text,
    placeholders,
    seen
}:ReplacePlaceholdersP) => {
    const copyString = text;
    const isAllUsed = placeholders.every((s) => seen.includes(s));
    let randomPlaceholder = sample(placeholders) as string;

    while (seen.includes(randomPlaceholder) && !isAllUsed) {
        randomPlaceholder = sample(placeholders) as string;
    }

    if (!isAllUsed) seen.push(randomPlaceholder);

    return copyString.replace('%placeholder%', randomPlaceholder);
};
