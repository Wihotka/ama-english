import {
    SelectValue
} from '@components/common/game/settings-window/parts/controls-wrapper/resolvers/controls/templates/template-select/select/Select';

type StateT = {isDisabled:boolean, isSelected:boolean, selectProps:{ options:Array<SelectValue>;menuIsOpen:boolean; };};

const checkIsLongWord = (options:StateT['selectProps']['options']) => options.some(({label}) => label.length >= 5);

export const customStyles = {
    control: (provided:any, {selectProps}:StateT) => {
        const {menuIsOpen} = selectProps;

        return {
            ...provided,
            background: '#69A5FF',
            boxShadow: menuIsOpen ? '0px 2px 8px rgba(13, 92, 214, 0.72)' : '0px 4px 0px #0D5CD6, 0px 2px 8px rgba(13, 92, 214, 0.72)',
            borderRadius: menuIsOpen ? '32px 32px 0 0' : 32,
            borderWidth: 0,
            minHeight: 54,
            cursor: 'pointer',

            ':after': {
                position: 'absolute',
                content: menuIsOpen ? '""' : null,
                height: '11px',
                width: '100%',
                left: 0,
                top: 51,
                background: '#69A5FF',
                zIndex: 3
            },
        };
    },
    indicatorSeparator: () => ({display: 'none'}),
    singleValue: (provided:any, state:StateT) => {
        const {options} = state.selectProps;

        const isLongWord = checkIsLongWord(options);

        const fz = isLongWord ? 18 : 40;
        const fw = isLongWord ? 700 : 800;

        return {
            ...provided,
            // color: '#FFFFFF',
            color: '#FFFFFF',
            fontSize: `${fz}px`,
            fontWeight: fw,
            lineHeight: '120%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0.03em',
            textShadow: '1px 1px 2px rgba(0, 43, 83, 0.72);',
            marginLeft: '17.6px',
        };
    },

    input: (provided:any) => ({
        ...provided,
        color: '#FFFFFF',
        fontSize: '40px',
        fontWeight: 800,
        lineHeight: '120%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: '0.03em',
        textShadow: '1px 1px 2px rgba(0, 43, 83, 0.72);',
        marginLeft: '17.6px',
    }),
    menu: (provided:any, {selectProps}:StateT) => {
        const {menuIsOpen} = selectProps;

        return {
            ...provided,
            background: '#69A5FF',
            boxShadow: '0px 4px 0px #0D5CD6, 0px 2px 8px rgba(13, 92, 214, 0.72)',
            borderRadius: menuIsOpen ? '0 0 32px 32px' : 32,
            overflow: 'hidden',
            margin: '-1px 0 10px 0',
            zIndex: 2,
        };
    },
    option: (provided:any, {isDisabled, isSelected, selectProps}:StateT) => {
        const {options} = selectProps;
        const isLongWord = checkIsLongWord(options);

        const fz = isLongWord ? 18 : 40;
        const fw = isLongWord ? 700 : 800;

        return {
            ...provided,
            color: '#FFFFFF',
            fontSize: `${fz}px`,
            fontWeight: fw,
            lineHeight: '120%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0.03em',
            textShadow: '1px 1px 2px rgba(0, 43, 83, 0.72);',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            marginLeft: isSelected && '8px',
            background: 'none',

            ':after': isSelected &&  {
                content: '"·"',
                color: '#21DBC5',
                marginLeft: '8px'
            },

            ':hover': {
                color: '#AAEEE2',
            }
        };
    }
};