import {ColourfulPhonetics_PictureData} from '../../../../type';

export const pictureData:{
    [picture:string]:{ [level:number]:ColourfulPhonetics_PictureData };
} = {
    hungryBear: {
        1: {
            colorSchemes: [
                ['#C3EDEA', '#8DC57E', '#C49C90', '#B56F42', '#FFCEA4'],
                ['#8DD6E0', '#9AB6F6', '#FF9D41', '#E05C4A', '#FBDCBE'],
                ['#77DFFF', '#18B91F', '#DEA97A', '#FF8F21', '#FFC96F'],
            ],
            correctColors: [0, 0, 1, 1, 1, 2, 3, 4],
            transcriptionPositions: [
                [
                    {left: 70, top: 5},
                    {left: 30, top: 65},
                ],
                [
                    {left: 80, top: 55},
                    {left: 85, top: 85},
                ],
                [{left: 10, top: 70}],
                [{left: 55, top: 45}],
                [{left: 40, top: 50}],
            ],
            initialColors: [
                ['#FF5B5B', '#FFBD00', '#FF8800'],
                ['#FA3C30', '#FFBD00', '#FF8800'],
                ['#FA3C30', '#FFBD00', '#FF8800'],
            ],
            colorAreas: [[0], [1], [2, 4], [3], [4, 2], [5], [6], [7]],
            totalAnswers: 7
        },
        2: {
            colorSchemes: [
                [
                    '#C3EDEA',
                    '#659D51',
                    '#8DC57E',
                    '#C49C90',
                    '#B56F42',
                    '#FFCEA4',
                    '#FF9A7A',
                ],
                [
                    '#EDDAC3',
                    '#755F86',
                    '#B198C6',
                    '#88554B',
                    '#E6CBBB',
                    '#EAA765',
                    '#6E8E39',
                ],
                [
                    '#C7C9F4',
                    '#DB7A49',
                    '#F9A753',
                    '#CAD9DD',
                    '#52557A',
                    '#F0C99A',
                    '#B553C0',
                ],
            ],
            correctColors: [0, 6, 2, 2, 1, 3, 4, 5],
            transcriptionPositions: [
                [{left: 70, top: 5}],
                [{left: 20, top: 40}],
                [
                    {left: 80, top: 55},
                    {left: 85, top: 85},
                ],
                [{left: 10, top: 70}],
                [{left: 55, top: 45}],
                [{left: 40, top: 50}],
                [{left: 30, top: 65}],
            ],
            initialColors: [
                ['#FF5B5B', '#FFBD00', '#FF8800'],
                ['#FF5B5B', '#FFBD00', '#FF8800'],
                ['#FF5B5B', '#FFBD00', '#FF8800'],
            ],
        },
    },
    funnyCrocodile: {
        1: {
            colorSchemes: [
                ['#C3EDEA', '#3D7EDB', '#FFD4A7', '#7D9137', '#E2E29C'],
                ['#98F6F6', '#1466DC', '#FEC600', '#F8485D', '#C2D500'],
                ['#81B5FE', '#3751E2', '#FEDCA1', '#FEAC00', '#6BDA14'],
            ],
            correctColors: [0, 1, 1, 1, 2, -1, 3, 3, 4, 4, 0, 0],
            transcriptionPositions: [
                [
                    {left: 50, top: 2},
                    {left: 47, top: 55},
                ],
                [{left: 10, top: 36}],
                [{left: 85, top: 80}],
                [
                    {left: 48, top: 26},
                    {left: 41, top: 69},
                ],
                [{left: 57, top: 66}],
            ],
            initialColors: [
                ['#FF7077', '#FFAB6A', '#FFAB6A'],
                ['#FF7077', '#EF6314', '#EF6314'],
                ['#FF7077', '#FFC765', '#FFC765'],
            ],
            colorAreas: [
                [0],
                [1, 2, 3],
                [2, 3, 1],
                [3, 2, 1],
                [4],
                [-1],
                [6],
                [7],
                [8, 9],
                [9, 8],
                [10, 11],
                [11, 10],
            ],
            totalAnswers: 7
        },
        2: {
            colorSchemes: [
                [
                    '#C3EDEA',
                    '#3D7EDB',
                    '#60B0DB',
                    '#7CDEEA',
                    '#FFD4A7',
                    '#FFAB6A',
                    '#7D9137',
                    '#E2E29C',
                    '#FF4D59',
                    '#FF7077',
                ],
                [
                    '#3A61EA',
                    '#473BCA',
                    '#685CEB',
                    '#8F85FF',
                    '#FF993B',
                    '#DF780E',
                    '#CC8FF1',
                    '#AB65D6',
                    '#F120D0',
                    '#F4CF0A',
                ],
                [
                    '#63D0FF',
                    '#6D61FA',
                    '#7B9FFB',
                    '#84BFF5',
                    '#FFE383',
                    '#FFD059',
                    '#00DDC7',
                    '#0BB2A2',
                    '#F86A2D',
                    '#4A6FF1',
                ],
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9],
            transcriptionPositions: [
                [{left: 50, top: 2}],
                [{left: 87, top: 25}],
                [{left: 10, top: 36}],
                [{left: 91, top: 44}],
                [{left: 85, top: 80}],
                [{left: 65, top: 85}],
                [
                    {left: 48, top: 26},
                    {left: 38, top: 70},
                ],
                [
                    {left: 57, top: 66},
                    {left: 18, top: 68},
                ],
                [{left: 37, top: 58}],
                [{left: 47, top: 55}],
            ],
            initialColors: [
                ['#FF7077', '#FFAB6A'],
                ['#F4CF0A', '#DF780E'],
                ['#F4CF0A', '#FFD059'],
            ],
        },
    },
    lovelyDragon: {
        1: {
            colorSchemes: [
                ['#84CCFF', '#55DE6A', '#8C7AFF', '#4635B4', '#DAC8FF'],
                ['#FFC2C2', '#FFB783', '#58DE76', '#12B45C', '#EBFF9D'],
            ],
            correctColors: [0, 1, 2, 3, 4, 1, 4],
            transcriptionPositions: [
                [{left: 25, top: 15}],
                [
                    {left: 82, top: 86},
                    {left: 12, top: 51},
                ],
                [{left: 51, top: 54}],
                [{left: 39, top: 19}],
                [
                    {left: 62, top: 60},
                    {left: 27, top: 72},
                ],
            ],
            initialColors: [
                /* claws, growths, nostrils, horns & ears, head */
                ['#7E53D8', '#1B0C82', '#180F56', '#97F8A6', '#A580F2'],
                ['#FFF38B', '#0A5F31', '#0F4E2C', '#F375A2', '#D1ED62'],
            ],
        },
        2: {
            colorSchemes: [
                [
                    '#BAF3FF',
                    '#AAC811',
                    '#1B597F',
                    '#123854',
                    '#FBCF7C',
                    '#F96262',
                    '#F77D5C',
                ],
                [
                    '#31D5E2',
                    '#A4D164',
                    '#F6385F',
                    '#991833',
                    '#FEF676',
                    '#D6F7FA',
                    '#81AF42',
                ],
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6],
            transcriptionPositions: [
                [{left: 25, top: 15}],
                [{left: 82, top: 86}],
                [{left: 51, top: 54}],
                [{left: 39, top: 19}],
                [{left: 62, top: 60}],
                [{left: 12, top: 51}],
                [{left: 27, top: 72}],
            ],
            initialColors: [
                /* claws, growths, nostrils, horns & ears, head */
                ['#EADFB2', '#002A44', '#123854', '#FF9971', '#D35C40'],
                ['#D6F7FA', '#6F081E', '#6B1B2B', '#D6F7FA', '#6CA61D'],
            ],
        },
    },
    curiousMonkey: {
        1: {
            colorSchemes: [
                /* sky, stars + limbs, face, fur, helm + body*/
                ['#3D2464', '#FF4C8C', '#FFEF9C', '#EE4A4A', '#88D4FF'],
                ['#0A1F67', '#F5A302', '#31A4F8', '#FFF5D2', '#C3FFCC'],
            ],
            correctColors: [0, 1, 2, 3, 4, 4, 1, 4],
            transcriptionPositions: [
                [{left: 9, top: 62}],
                [
                    {left: 81, top: 12},
                    {left: 38, top: 63},
                ],
                [{left: 36, top: 25}],
                [{left: 47, top: 49}],
                [
                    {left: 35, top: 10},
                    {left: 63, top: 70},
                    {left: 16, top: 80},
                ],
            ],
            initialColors: [
                /* p holes, p1, p2, planets, hands & btns & feet, wrists & ankles, toes, 2 btns */
                [
                    '#3A8AB8',
                    '#62EA88',
                    '#E92E66',
                    '#FFFFFF',
                    '#FFE37C',
                    '#82E0D6',
                    '#7CADFA',
                    '#E7726B',
                ],
                [
                    '#86C38F',
                    '#62C1EA',
                    '#F6700F',
                    '#FFFFFF',
                    '#FFE37C',
                    '#82E0D6',
                    '#7CADFA',
                    '#E7726B',
                ],
            ],
        },
        2: {
            colorSchemes: [
                [
                    '#4A567E',
                    '#FDC147',
                    '#B56F42',
                    '#E7BFA4',
                    '#D7EDEA',
                    '#82E0D6',
                    '#82B2A6',
                    '#FD908E',
                ],
                [
                    '#3A1A6F',
                    '#F3E763',
                    '#C65254',
                    '#F5CB97',
                    '#C0FDF8',
                    '#4680DD',
                    '#7CADFA',
                    '#F08CEF',
                ],
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7],
            transcriptionPositions: [
                [{left: 9, top: 62}],
                [{left: 81, top: 12}],
                [{left: 36, top: 25}],
                [{left: 47, top: 49}],
                [{left: 35, top: 10}],
                [{left: 63, top: 70}],
                [{left: 38, top: 63}],
                [{left: 16, top: 80}],
            ],
            initialColors: [
                /* p holes, p1, p2, planets, hands & btns & feet, wrists & ankles, toes, 2 btns */
                [
                    '#FD4C65',
                    '#B0D6DD',
                    '#CC72C9',
                    '#FFFFFF',
                    '#FFE37C',
                    '#82E0D6',
                    '#7CADFA',
                    '#E7726B',
                ],
                [
                    '#C53CC3',
                    '#70F6FF',
                    '#35D59C',
                    '#E7B3EF',
                    '#A748E4',
                    '#4680DD',
                    '#7CADFA',
                    '#F9DEFD',
                ],
            ],
        },
    },
    happyOctopus: {
        1: {
            colorSchemes: [
                ['#33ADF1', '#FFE99D', '#06E0B9', '#FFE978', '#EE84FF'],
                ['#98FFD4', '#F3CD44', '#777DFD', '#0AEBEB', '#FF8484'],
            ],
            correctColors: [0, 1, 4, 3, 2, 4, 2, 3],
            transcriptionPositions: [
                [{left: 5, top: 39}],
                [{left: 65, top: 89}],
                [
                    {left: 46, top: 51},
                    {left: 14, top: 84},
                ],
                [
                    {left: 20, top: 22},
                    {left: 45, top: 17},
                ],
                [
                    {left: 76, top: 11},
                    {left: 75, top: 53},
                ],
            ],
            initialColors: [
                /* bubbles, jelly */
                ['#89E7FC', '#E2C110'],
                ['#62E2FE', '#E2C110'],
            ],
            /* colorAreas: [
                [0], [1], [2], [3, 7], [4, 6], [5], [6, 4], [7, 3]
            ] */
        },
        2: {
            colorSchemes: [
                [
                    '#A2D8E5',
                    '#FFD4B6',
                    '#F4BB61',
                    '#B392EC',
                    '#FC7295',
                    '#A64892',
                    '#B6E090',
                    '#FC9FCE',
                ],
                [
                    '#65DAEA',
                    '#F6DC98',
                    '#FF6363',
                    '#2AE7A3',
                    '#FEED02',
                    '#8D75D2',
                    '#C0A3FF',
                    '#11D60D',
                ],
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7],
            initialColors: [
                /* bubbles, jelly */
                ['#D1F9FF', '#8B2EA4'],
                ['#A6F0FA', '#0BAF74'],
            ],
            transcriptionPositions: [
                [{left: 5, top: 39}],
                [{left: 65, top: 89}],
                [{left: 76, top: 11}],
                [{left: 20, top: 22}],
                [{left: 46, top: 51}],
                [{left: 75, top: 53}],
                [{left: 14, top: 84}],
                [{left: 45, top: 17}],
            ],
        },
    },
    cuteFrog: {
        1: {
            colorSchemes: [
                ['#B3F1FF', '#57A5EE', '#D0DE7A', '#0C8662', '#DD6994'],
                ['#FFDCB3', '#9B77FF', '#07862A', '#FFED95', '#87BEFF'],
            ],
            correctColors: [0, 1, 1, 2, 2, 2, 3, 3, 1, 4],
            transcriptionPositions: [
                [{left: 50, top: 15}],
                [
                    {left: 40, top: 92},
                    {left: 60, top: 48},
                ],
                [
                    {left: 48, top: 60},
                    {left: 83, top: 64},
                ],
                [{left: 60, top: 85}],
                [{left: 15, top: 80}],
            ],
            initialColors: [
                /* petals, spots, flower */
                ['#C94C7E', '#266198', '#F3B335'],
                ['#4182CE', '#FFDA17', '#F3B335'],
            ],
            colorAreas: [
                [0],
                [1],
                [2, 8],
                [3],
                [4, 5],
                [5, 4],
                [6, 7],
                [7, 6],
                [8, 2],
                [9],
            ],
            totalAnswers: 7
        },
        2: {
            colorSchemes: [
                [
                    '#B3F1FF',
                    '#87C6FF',
                    '#9ABB16',
                    '#BFD966',
                    '#95D893',
                    '#6BB67D',
                    '#02654E',
                    '#0C8662',
                    '#779010',
                    '#DD6994',
                ],
                [
                    '#98BBFF',
                    '#72CBBB',
                    '#44A4FD',
                    '#FFFCB0',
                    '#31B250',
                    '#59EF7D',
                    '#0C6F23',
                    '#3D890E',
                    '#1D7CD3',
                    '#8769DD',
                ],
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            initialColors: [
                /* petals, spots, flower */
                ['#C94C7E', '#779010', '#F3B335'],
                ['#5C39BE', '#1D7CD3', '#FE6868'],
            ],
            transcriptionPositions: [
                [{left: 50, top: 15}],
                [{left: 40, top: 92}],
                [{left: 60, top: 48}],
                [{left: 48, top: 60}],
                [{left: 16, top: 45}],
                [{left: 83, top: 64}],
                [{left: 60, top: 85}],
                [{left: 75, top: 85}],
                [{left: 72, top: 71}],
                [{left: 15, top: 80}],
            ],
        },
    },
    smartToucan: {
        1: {
            colorSchemes: [
                ['#69B963', '#F3FFA9', '#093305','#CB1306','#66D8FC'],
                ['#035038', '#FFF3C9', '#380400', '#D35900', '#FFE256'],
                ['#9BEB87', '#FFF3C9', '#042650', '#9CC008', '#B6EAFA']
            ],
            correctColors: [3, -1, 1, 2, 1, -1, 0, 0, 4, 2],
            transcriptionPositions: [
                [{left: 8, top: 79}],
                [{left: 55, top: 68}],
                [{left: 60, top: 47}],
                [{left: 25, top: 32}],
                [{left: 85, top: 39}],
            ],
            initialColors: [
                /* nose, eye, leftrock, legs, trees, rock */
                ['#A50B00', '#56A5E4', '#AD8959', '#F9C25E', '#CB6C21', '#D8B78C'],
                ['#933E01', '#ECBB0C','#5F767E','#F1B301','#7B433C','#8DA3AB'],
                ['#698302','#46B1ED','#E4B6A1','#F1B301', '#7B433C','#FFE2CF']
            ],
            colorAreas: [
                [0], [-1], [2, 4], [3, 9], [4, 2], [-1], [6,7], [7,6], [8], [9, 3]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                [
                    '#FFCA41',
                    '#513616',
                    '#EDCECE',
                    '#724662',
                    '#FFB68D',
                    '#EDDAEB',
                    '#2A637C',
                    '#2A7C63',
                    '#9093DB',
                    '#FFA81D'
                ],
                [
                    '#52C1FF',
                    '#966E38',
                    '#FFDA05',
                    '#F79F38',
                    '#FCECD5',
                    '#C6B9DE',
                    '#678526',
                    '#B1CA3D',
                    '#ACF3FF',
                    '#AFFEF5'
                ],
                [
                    '#FDBE84',
                    '#523733',
                    '#8ED6FF',
                    '#DB3E2B',
                    '#FACCC6',
                    '#B8D1D9',
                    '#3D9777',
                    '#65D4A5',
                    '#F9E18D',
                    '#259EE2'
                ]
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            initialColors: [
                /* nose, eye, leftrock, legs */
                ['#F38706', '#AD6EFD', '#AD89A8', '#BA9B6D'],
                ['#76F3E4', '#BD3F25', '#9D8DBD', '#FBD484'],
                ['#FFA800', '#18AA6C', '#85A7B1', '#E5B495']
            ],
            transcriptionPositions: [
                [{left: 25, top: 32}],
                [{left: 70, top: 33}],
                [{left: 46, top: 46}],
                [{left: 60, top: 47}],
                [{left: 55, top: 68}],
                [{left: 78, top: 89}],
                [{left: 8, top: 79}],
                [{left: 67, top: 5}],
                [{left: 85, top: 39}],
                [{left: 80, top: 73}],
            ],
        },
    },
    wonderfulUnicorn: {
        1: {
            colorSchemes: [
                ['#D6CAFF', '#BEFCF1','#FEDBFF','#C801CF','#FFDD00'],
                ['#8CEFEE', '#F8EFD2', '#DBF2FF', '#1D75FB','#FF8854'],
                ['#FFB68D','#76B8FF','#C2DFFC','#FF5671','#FFEA75']
            ],
            correctColors: [0, 1, -1, -1, 2, 3, 3, 3, 4],
            transcriptionPositions: [
                [{left: 48, top: 50}],
                [{left: 21, top: 46}],
                [{left: 75, top: 91}],
                [{left: 91, top: 52}],
                [{left: 65, top: 4}],
            ],
            initialColors: [
                /* clouds, diamonds, horn, ear, hoofs, BFD, stars */
                ['#FE2E53', '#7BE289','#FF89A2','#FF89A2','#B19FFF','#FF6D8D','#99F3FF'],
                ['#D91D24','#FF3A37','#FA8D71','#FA8D71','#008B87','#B9B8FF','#FFF844'],
                ['#D91D24','#F668F3','#FA8D71','#FA8D71','#D87A46','#E3E6CD','#6D65FD']
            ],
            colorAreas: [
                [0], [1], [-1], [-1], [4], [5,6,7],[6,7,5],[7,5,6], [8]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                [
                    '#89BFEF',
                    '#C0FFE1',
                    '#4AE4F8',
                    '#FFDE2F',
                    '#FEFFB3',
                    '#C6A6FC',
                    '#A778F9',
                    '#9256F8'
                ],
                [
                    '#FFEEFF',
                    '#C7FFFF',
                    '#F6E458',
                    '#FF63A1',
                    '#F5D0FF',
                    '#FEF26B',
                    '#FE6DCB',
                    '#3AD4FF'
                ],
                [
                    '#FFD194',
                    '#FFF5E1',
                    '#FF90F9',
                    '#5CDFF1',
                    '#E3FCFF',
                    '#FFF89D',
                    '#B89BCE',
                    '#FA91C8'
                ]
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7],
            initialColors: [
                /* clouds, diamonds, horn, ear, hoofs, BFD, stars, rainbow top-to-down */
                ['#FB8A9C','#FB8A9C','#FFD554','#F683B7','#4755CC', '', '', '#FE899E','#FEC046','#FFE38C'],
                ['#FF5E90','#81F9F7','#FDDA01','#FA83A4','#FEC1E6', '', '', '#26BBFB','#3B72FE','#9B36DE'],
                ['#FE5C91','#60D0A8','#FFC01D','#5D5465','#78412E','','','#F28CBC','#B89BCE','#FEF5A6']
            ],
            transcriptionPositions: [
                [{left: 48, top: 50}],
                [{left: 21, top: 46}],
                [{left: 6, top: 48}],
                [{left: 9, top: 78}],
                [{left: 75, top: 91}],
                [{left: 56, top: 55}],
                [{left: 61, top: 45}],
                [{left: 66, top: 54}],
            ],
        },
    },
    artisticOctopus: {
        1: {
            colorSchemes: [
                ['#FEDA3B','#FF54AD','#A4C401','#8EC0FA','#5484FF'],
                ['#FFC759','#1BDCE0','#FF425B','#E9BAFC','#AC68C5'],
                ['#F9D856','#FF9F2D','#15BD1C','#0EC1E9','#1594CB']
            ],
            correctColors: [4, 3, 1, 2, 2, 3, -1, 0, -1],
            transcriptionPositions: [
                [{left: 23, top: 87}],
                [{left: 52, top: 56}],
                [{left: 60, top: 34}],
                [{left: 71, top: 4}],
                [{left: 38, top: 10}],
            ],
            initialColors: [
                /* octopus, shell, easel, rocks */
                ['#E11583','#AF54F4','#DC9441','#DC9441'],
                ['#16ABAE','#AF54F4','#DC9441','#856AC7'],
                ['#FF6B00','#546EF4','#DC9441','#039589']
            ],
            colorAreas: [
                [0], [1, 5], [2], [3, 4], [4, 3], [5, 1], [-1], [7], [-1]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                ['#76A4FF','#8FB5FF','#E4B8FF','#CC2B2B','#216C0E','#C9DBFF','#DC9441','#FFE09F','#A3ACCD'],
                ['#B3EBFE','#90E3FF','#FFA6B6','#96D62D','#0EC13E','#E0F7FF','#F47D03','#FFC58A','#5FABCA'],
                ['#757BEB','#9499F8','#FBDD15','#DE1589','#D191FF','#BEC1FF','#D15845','#FDC28C','#C8BAF4']
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            initialColors: [
                /* octopus, shell */
                ['#CE7FFF', '#FF9494'],
                ['#FF6E88','#FECC1C'],
                ['#FFC83A', '#FFDFFF']
            ],
            transcriptionPositions: [
                [{left: 38, top: 10}],
                [{left: 88, top: 7}],
                [{left: 52, top: 56}],
                [{left: 60, top: 34}],
                [{left: 0, top: 60}],
                [{left: 27, top: 15}],
                [{left: 12, top: 27}],
                [{left: 23, top: 87}],
                [{left: 92, top: 91}],
            ],
        },
    },
    sweetTooth: {
        1: {
            colorSchemes: [
                ['#FFCE01','#863CFF','#FB5E1F','#5FA4FF','#7DE560'],
                ['#26C0FD','#82DC08','#FF4D99','#FECA13','#CF28E4'],
                ['#9687F4','#FFCF64','#C5C4FC','#83EAB8','#FC8B91']
            ],
            correctColors: [2,1,0,-1,2,0,4,3,-1],
            transcriptionPositions: [
                [{left: 18, top: 23}],
                [{left: 30, top: 12}],
                [{left: 46, top: 40}],
                [{left: 65, top: 83}],
                [{left: 35, top: 65}],
            ],
            initialColors: [
                /* bg, topleft, 2nd top, center, 2nd left, chocSide, chocSideCenter, heart, pills, alt center*/
                ['#EAFFBF','#FE244D','#FFF73B','#9501A9','#0A5ECF','#F0B28A','#79A724','#F8D7B5','#55EED2', '#248166'],
                ['#FFE2BF','#F98B03','#C80024','#16BBFE','#CE8518','#DA4C87','#FFD219','#FF6FAB','#EE6755','#9492FF'],
                ['#D2FAFF','#F98B03','#C80024','#69CBBC','#50CB90','#28A430','#FFD219','#46C74E','#FF8E36', '#EE4A7F']
            ],
            colorAreas: [
                [0,4],[1],[2,5],[-1],[4,0],[5,2],[6],[7],[-1]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                ['#61C6FF','#F1316B','#FF162B','#42E3C6','#FF9C57','#8FF470','#AB8FF6','#FDA0FF','#945934'],
                ['#FFC061','#6FEAED','#FF1F98','#A3E550','#D5F56D','#DB8DF9','#08AEE2','#FFF740','#F7D794'],
                ['#E81786','#FF8514','#19DA5A','#068ED3','#8050B3','#45B4F2','#E4124F','#FF8F8F','#F6C618']
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            initialColors: [
                /* bg, topleft, 2nd top, center, 2nd left, chocSide, chocSideCenter*/
                ['#FFD8BC','#9AF1FF','#099DB5','#F9F472','#BB124C','#5A2D10','#FFF0A3'],
                ['#D3FFF9','#FF7F7F','#099DB5','#D3F76B','#BB124C','#D1A851','#F7D8D6'],
                ['#C8FCD6','#F474BF','#14D44A','#9EDA18','#BB124C','#D2AA16','#F16A8F']
            ],
            transcriptionPositions: [
                [{left: 79, top: 49}],
                [{left: 79, top: 20}],
                [{left: 76, top: 61}],
                [{left: 66, top: 56}],
                [{left: 46, top: 40}],
                [{left: 39, top: 45}],
                [{left: 35, top: 65}],
                [{left: 17, top: 42}],
                [{left: 20, top: 79}],
            ],
        },
    },
    openSpace: {
        1: {
            colorSchemes: [
                ['#1541FF','#FE61C1','#FFA800','#FEF400','#50F5A6'],
                ['#802EFF','#FFE822','#5AED00','#FBA007','#E61C43'],
                ['#070130','#5862FE','#FEAF05','#FBC708','#60FCFE']
            ],
            correctColors: [0,1,4,2,-1,2,3,4,1],
            transcriptionPositions: [
                [{left: 63, top: 35}],
                [{left: 79, top: 25}],
                [{left: 90, top: 66}],
                [{left: 90, top: 44}],
                [{left: 71, top: 68}],
            ],
            initialColors: [
                /* rocket, rocket2, saturn, left planent, UFO, UFO2, windows, window frame, flame */
                ['#9A82FF', '#FFFFFF','#03D9D9','#7F13B9','#3696FF','#FF7077', '#9EB8FF','#9A82FF','#FD3F22'],
                ['#E82144','#FFFFFF','#09D4BC','#F55B31','#20AED0','#FF7077','#C6ECF0','#068694','#57DAFA'],
                ['#8B88FF','#FFFFFF','#09D4BC','#D901E5','#20AED0','#FF7077', '#C6ECF0','#068694','#C71C25']
            ],
            colorAreas: [
                [0],[1,8],[2,7],[3,5],[-1],[5,3],[6],[7,2],[8,1]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                ['#7C54A1','#FF8E26','#96ADBA','#63F71D','#EF1717','#4B77EE','#FFFF48','#C492F5','#80C7FF'],
                ['#4433AB','#E126FF','#E1ACE5','#F71D44','#17C8EF','#FF5D2A','#EFB214','#1CD63A','#80E8FF'],
                ['#064A7A','#26BEFF','#E1ACE5','#1DF7A9','#EF17A6','#9EF588','#C3EF14','#FF3B3B','#FF6161']
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            initialColors: [
                /* rocket, rocket2, saturn, left planent, UFO, UFO2, windows, window frame */
                ['#96ADBA', '#FFC700', '#B3FBFF', '#F16100', '#BEF6FA', '#15EBEB','#FFEBC3', '#406E88'],
                ['#E1ACE5','#FFC700','#FFBC3B','#22F100','#BA57C1','#15EBEB','#C3FFF4', '#89358F'],
                ['#28A678','#FFC700','#FFF618','#00F1A9', '#BA57C1','#15EBEB','#FAD9FF','#89358F']
            ],
            transcriptionPositions: [
                [{left: 63, top: 35}],
                [{left: 79, top: 25}],
                [{left: 39, top: 9}],
                [{left: 32, top: 62}],
                [{left: 20, top: 70}],
                [{left: 90, top: 66}],
                [{left: 90, top: 44}],
                [{left: 71, top: 68}],
                [{left: 11, top: 32}],
            ],
        },
    },
    dangerousDragon: {
        1: {
            colorSchemes: [
                ['#FFC328','#73CEE1','#C3DD82','#A7CE44','#EE6429'],
                ['#F26528','#F9F7CA','#22A762','#138349','#EC3F43'],
                ['#04A9CD','#B6FFF6','#58DE76','#00B15C','#FA803D']
            ],
            correctColors: [0,4,0,-1,2,3,2,1],
            transcriptionPositions: [
                [{left: 48, top: 53}],
                [{left: 79, top: 14}],
                [{left: 91, top: 24}],
                [{left: 80, top: 85}],
                [{left: 20, top: 53}],
            ],
            initialColors: [
                /* claws, back, skin, mouth, teeth, tongue, eyes, horns */
                ['#725CAA','#725CAA','#725CAA','#FE7A5F','#FFF6B1','#F04D2B','#FFFFFF','#725CAA'],
                ['#FFE101','#FFE101','#FFE101','#BFA9F4','#FFEBC4','#6E45D1','#FFFFFF','#FFE101'],
                ['#FFE101','#FFE101','#FFE101','#FEA4BD','#FFEBC4','#EC4372','#FFFFFF','#FFE101']
            ],
            colorAreas: [
                [0,2],[1],[2,0],[-1],[4,6],[5],[6,4],[7]
            ],
            totalAnswers: 5
        },
        2: {
            colorSchemes: [
                ['#04D989','#FFA7A3','#82EEC6','#D60A51','#D797FF','#C278F1','#EDBD27','#F4DCE6'],
                ['#FFC83C','#FF923E','#FFB973','#8555A9','#72D7D1','#56B0A5','#6238C3','#68B6F5'],
                ['#FC4747','#FBACAC','#FF7878','#F0F363','#80DA8C','#66C997','#84E256','#81D2F7']
            ],
            correctColors: [0, 1, 2, 3, 4, 5, 6, 7],
            initialColors: [
                /* claws, back, skin, mouth, teeth, tongue, eyes */
                ['#EF5B8E','#CA1280','#029175','#F99281','#FFD2B1','#F64336','#B3E5E8'],
                ['#8555A9','#B13AAE','#FF612E','#F99281','#FFD2B1','#F64336','#B3E5E8'],
                ['#FAFC9F','#F3C03B','#F31A1A','#F99281','#FFD2B1','#F64336','#B3E5E8']
            ],
            transcriptionPositions: [
                [{left: 35, top: 55}],
                [{left: 20, top: 53}],
                [{left: 52, top: 25}],
                [{left: 23, top: 8}],
                [{left: 91, top: 71}],
                [{left: 80, top: 85}],
                [{left: 90, top: 24}],
                [{left: 66, top: 8}],
            ],
        },
    }
};
