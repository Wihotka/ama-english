// import {mainColor} from '@global-config/themes';

export const customStyles = {
    control: (provided:any, state:{ selectProps:{ menuIsOpen:any; }; }) => {
        const {menuIsOpen} = state.selectProps;

        return ({
            ...provided,
            boxShadow: '0px 10px 15px rgba(213, 221, 242, 0.3)',
            height: 62,
            borderRadius: menuIsOpen ? '10px 10px 0 0' : 10,
            borderColor: '#E3E7F8!important',
            paddingRight: 35,
            paddingLeft: 10,
            cursor: 'pointer',
            ':active': {
                borderColor: '#E3E7F8',
            },
            ':hover': {
                borderColor: '#E3E7F8',
            }
        });
    },
    indicatorSeparator: () => ({display: 'none'}),
    singleValue: (provided:any) => ({
        ...provided,
        color: '#000',
        fontSize: 20,
    }),
    menu: (provided:any, state:{ selectProps:{ menuIsOpen:any; }; }) => {
        const {menuIsOpen} = state.selectProps;

        return (
            {
                ...provided,
                margin: '-1px 0 10px 0',
                boxShadow: '0px 10px 15px rgba(213, 221, 242, 0.3)',
                border: '1px solid #E3E7F8',
                borderTop: menuIsOpen ? 'none' : '1px solid',
                borderRadius: menuIsOpen ? '0 0 10px 10px' : 10,
                overflow: 'hidden',
            }
        );
    },
    option: (provided:any, {isDisabled}:{isDisabled:boolean}) => (
        {
            ...provided,
            fontSize: 18,
            paddingLeft: 20,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            color: '#000',
            backgroundColor: '#fff',
            ':active': {
                backgroundColor: '#fff',
            },
            ':hover': {
                ...provided[':hover'],
                // color: mainColor,
            }
        }
    )
};