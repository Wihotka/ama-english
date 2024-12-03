import React, {CSSProperties} from 'react';
import Slider from 'rc-slider';
import {useSelector} from 'react-redux';

import {setVolume, setOldVolume, setMuted} from '@reducers/interface-volume/dispatchers';

import {Btn} from '@components/common/elements';

import {SubTitle} from '../sub-title';
import styles from './styles.scss';
import {StoreInner} from '@store';

const handleStyle:CSSProperties = {
    background: 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)',
    width: '16px',
    height: '20px',
    boxShadow: '0px 4px 0px #0D5CD6',
    borderRadius: '32px',
    border: 0,
    marginTop: '-9px'
};

const dotStyles:CSSProperties = {
    background: '#BCD7FF',
    borderRadius: '32px',
    width: '8px',
    height: '12px',
    border: 0,
    bottom: '-5px'
};

const marks = {
    0: <span className={styles.mark}>0</span>,
    1: <span className={styles.mark}>1</span>,
};

export const Volume = () => {
    const {isMuted, volume} = useSelector((store:StoreInner) => store.interfaceVolume);

    const onChange = (value:number) => {
        setVolume(value);
    };

    const onAfterChange = (value:number) => {
        setOldVolume(value);
    };

    const onMutedClick = () => {
        setMuted(!isMuted);
    };

    return (
        <div>
            <SubTitle name={'sound'} />
            <div className={styles.buttons}>
                <div className={styles.btn}>
                    <Btn isRound size={'small'} handler={onMutedClick} ><SoundOn isMuted={isMuted}/></Btn>
                </div>
                <Slider
                    min={0}
                    max={1}
                    step={.1}
                    value={volume}
                    marks={marks}
                    className={styles.soundSlider}
                    style={{marginLeft: '4px'}}
                    railStyle={{height: '6px', background: '#BCD7FF'}}
                    trackStyle={{background: 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)', height: '6px'}}
                    dotStyle={dotStyles}
                    activeDotStyle={{background: 'linear-gradient(180deg, #69A5FF 0%, #3685FD 100%)'}}
                    handleStyle={handleStyle}
                    defaultValue={volume}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                />
            </div>
        </div>
    );
};

const SoundOn = ({isMuted}:{isMuted:boolean}) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 10.286v4.571c0 .304.122.594.34.809.216.214.51.334.818.334h3.009c.228 0 .566.066.756.191l4.856 3.194a1.168 1.168 0 0 0 1.636-.363c.107-.178.164-.38.164-.587V6.708c0-.207-.056-.41-.163-.588a1.17 1.17 0 0 0-1.637-.365L5.923 8.95c-.19.125-.527.192-.756.192h-3.01c-.306 0-.6.12-.818.335-.217.214-.339.505-.339.808Z"
            stroke="#fff"
            strokeWidth={2}
        />
        {isMuted
            ?         <path
                d="m19 13 2 2m-4 0 2-2-2 2Zm4-4-2 2 2-2Zm-2 2-2-2 2 2Z"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            : <path
                d="M16.053 7.429S17.79 9.143 17.79 12c0 2.857-1.737 4.572-1.737 4.572M20.105 4S23 6.857 23 12s-2.895 8-2.895 8"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />}
    </svg>
);