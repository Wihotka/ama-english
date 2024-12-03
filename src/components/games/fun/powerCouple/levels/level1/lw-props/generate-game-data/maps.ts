import {MapsField} from '../../type';

const map1 = {
    field1: [
        [5, 6],
        [4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
        [4, 5, 6, 7],
        [5, 6],
    ],
    field2: [
        [],
        [5, 6],
        [4, 5, 6, 7],
        [4, 5, 6, 7],
        [5, 6],
        [],
    ],
    field3: [
        [],
        [],
        [5, 6],
        [5, 6],
        [],
        [],
    ]
};

const map2 = {
    field1: [
        [3, 8],
        [2, 3, 4, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 3, 4, 7, 8, 9],
        [3, 8],
    ],
    field2: [
        [],
        [],
        [2, 3, 4, 7, 8, 9],
        [2, 3, 4, 7, 8, 9],
        [],
        [],
    ],
    field3: [
        [],
        [],
        [3, 8],
        [3, 8],
        [],
        [],
    ]
};

const map3 = {
    field1: [
        [4, 5, 6, 7],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 7, 8, 9, 10],
        [1, 2, 3, 4, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7],
    ],
    field2: [
        [5, 6],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 7, 8, 9],
        [2, 3, 4, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [5, 6],
    ],
    field3: [
        [5, 6],
        [3, 4, 5, 6, 7, 8],
        [3, 8],
        [3, 8],
        [3, 4, 5, 6, 7, 8],
        [5, 6],
    ]
};

const map4 = {
    field1: [
        [2, 4, 7, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 4, 7, 9]
    ],
    field2: [
        [],
        [],
        [3, 4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
        [],
        []
    ],
    field3: [
        [],
        [],
        [5, 6],
        [5, 6],
        [],
        []
    ]
};

const map5 = {
    field1: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ],
    field2: [
        [3, 4, 5, 6, 7, 8],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [3, 4, 5, 6, 7, 8]
    ],
    field3: [
        [],
        [3, 4, 5, 6, 7, 8],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [3, 4, 5, 6, 7, 8],
        []
    ]
};

const map6 = {
    field1: [
        [3, 4, 5, 6, 7, 8],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [3, 4, 5, 6, 7, 8]
    ],
    field2: [
        [5, 6],
        [3, 4, 5, 6, 7, 8],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9],
        [3, 4, 5, 6, 7, 8],
        [5, 6]
    ],
    field3: [
        [],
        [4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
        [4, 5, 6, 7],
        []
    ],
    field4: [
        [],
        [5, 6],
        [4, 5, 6, 7],
        [4, 5, 6, 7],
        [5, 6],
        []
    ],
    field5: [
        [],
        [],
        [5, 6],
        [5, 6],
        [],
        []
    ],
};

const map7 = {
    field1: [
        [3, 4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [3, 4, 5, 6, 7, 8],
    ],
    field2: [
        [4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8],
    ],
    field3: [
        [5, 6, 7, 8],
        [5, 6, 7, 8],
        [5, 6, 7, 8],
        [5, 6, 7, 8],
        [5, 6, 7, 8],
        [5, 6, 7, 8],
    ],
    field4: [
        [6, 7, 8],
        [6, 7, 8],
        [6, 7, 8],
        [6, 7, 8],
        [6, 7, 8],
        [6, 7, 8],
    ],
    field5: [
        [7, 8],
        [7, 8],
        [7, 8],
        [7, 8],
        [7, 8],
        [7, 8],
    ],
    field6: [
        [8],
        [8],
        [8],
        [8],
        [8],
        [8],
    ],
};

export const mapsField:MapsField = {
    1: map1,
    2: map2,
    3: map3,
    4: map4,
    5: map5,
    6: map6,
    7: map7,
};

export const mapCentralPositionCard:MapsField = {
    1: {
        field1: [
            [],
            [],
            [],
            [5, 6],
            [],
            [],
        ],
    },
    2: {
        field1: [
            [],
            [],
            [5, 6],
            [],
            [],
            [],
        ],
    },
    3: {
        field1: [
            [],
            [],
            [5],
            [5],
            [],
            [],
        ],
    },
    4: {
        field1: [
            [],
            [],
            [6],
            [6],
            [],
            [],
        ],
    }
};