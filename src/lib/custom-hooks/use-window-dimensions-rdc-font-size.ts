import {useState, useEffect} from 'react';

const getFontSize = (lettersQty:number) => {
    const {innerWidth} = window;

    const fontSize = Math.ceil(innerWidth / (lettersQty * 0.9));

    return (fontSize < 105)
        ? (fontSize > 17)
            ? fontSize
            : 17
        : 105;
};

export const useWindowDimensionsRdcFontSize = (lettersQty:number) => {
    const [fontSize, setFontSize] = useState(getFontSize(lettersQty));

    useEffect(() => {
        const reassignFontSize = () => setFontSize(getFontSize(lettersQty));

        window.addEventListener('resize', reassignFontSize);

        return () => window.removeEventListener('resize', reassignFontSize);
    }, []);

    return fontSize;
};
