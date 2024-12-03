import {setSizeP} from '../type';

export const setSizes = (props:setSizeP) => {
    const {changeGPDOnline, feather, field} = props;

    changeGPDOnline({
        sizes: {
            featherWidth: feather.current?.clientWidth,
            featherHeight: feather.current?.clientHeight,
            fieldWidth: field.current?.clientWidth,
            fieldHeight: field.current?.clientHeight
        }
    });
};