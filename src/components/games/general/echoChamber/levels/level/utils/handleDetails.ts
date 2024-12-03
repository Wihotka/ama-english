import {handleDetailsT} from './../type';

export const handleDetails:handleDetailsT = (props) => {
    const {isDetailsShowed, changeGPDOnline} = props;

    changeGPDOnline({
        isDetailsShowed: !isDetailsShowed
    });
};