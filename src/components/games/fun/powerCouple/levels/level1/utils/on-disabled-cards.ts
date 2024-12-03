import {OnActiveCardsT} from './../type';

export const onDisabledCards:OnActiveCardsT = ({mainField}) => mainField
    .map((field, numberField) => field
        .map((line, numberLine) => line
            .map((card, indexItem) => {
                if (!card) return card;

                //Отключает карточку, если в поле на уровень выше имеется карта
                if (mainField[numberField + 1] && mainField[numberField + 1][numberLine][indexItem]) return {
                    ...card,
                    isDisabled: true
                };
                // Активный первый элемент
                else if (indexItem === 0 && card) return {...card, isDisabled: false};
                // Активный последний элемент
                else if (indexItem === line.length - 1 && card) return {...card, isDisabled: false};
                // Делает активную карту у которой слева или справа имеется пустота
                else if ((card && !line[indexItem + 1]) || (card && !line[indexItem - 1])) return {...card, isDisabled: false};

                return {...card, isDisabled: true};
            })
        ));