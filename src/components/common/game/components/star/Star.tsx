import React from 'react';

// import {rateGetter} from 'amakids-games-utils-and-generations/lib/utils';

import styles from './styles.scss';

type P = {
    // isNotActive?:boolean;
    // progressPercent?:number;
    // valuesThresholds?:Array<number>;
    isFullStar?:boolean;
};

// const starsThemes = [
//     {
//         //hue-rotate(-235deg)
//         first_stop1: '#8B8BE0',
//         first_stop2: '#A177B7',
//         second_step1: '#A068FB',
//         second_step2: '#570BD1',
//         third_step1: '#A068FB',
//         third_step2: '#652AC3',
//         fill: '#6B34C3'
//     },
//     {
//         //hue-rotate(-195deg)
//         first_stop1: '#8B8BE0',
//         first_stop2: '#A177B7',
//         second_step1: '#FE117E',
//         second_step2: '#B31A8F',
//         third_step1: '#971A8F',
//         third_step2: '#FE4CCE',
//         fill: '#981382'
//     },
//     {
//         first_stop1: '#D48D00',
//         first_stop2: '#D99717',
//         second_step1: '#FBF901',
//         second_step2: '#FFBA00',
//         third_step1: '#FDE81A',
//         third_step2: '#FFA900',
//         fill: '#BF8F31'
//     },
//     {
//         first_stop1: '#6FF89D',
//         first_stop2: '#149C43',
//         second_step1: '#23F66A',
//         second_step2: '#01842E',
//         third_step1: '#0AC649',
//         third_step2: '#056D28',
//         fill: '#056D28'
//     }
// ];

export const Star = ({isFullStar = true}:P) => 
    (
        <svg
            width={30}
            height={29}
            fill="none"
            className={styles.star}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m19.55 9.338.116.236.26.037 8.925 1.297c.347.052.58.37.529.706l-.001.005a.623.623 0 0 1-.182.357l-6.457 6.296-.189.183.045.26 1.526 8.89a.623.623 0 0 1-.51.72.616.616 0 0 1-.394-.06l-.002-.002-7.984-4.198-.233-.122-.232.122-7.984 4.198h-.001a.624.624 0 0 1-.905-.657l1.526-8.892.044-.259-.188-.183L.8 11.975a.627.627 0 0 1 .344-1.066l8.927-1.298.26-.037.116-.236 3.99-8.087V1.25a.63.63 0 0 1 .84-.284c.122.06.221.16.282.282l3.99 8.09Z"
                fill={isFullStar ? '#FEF513' : '#fff'}
                stroke="#FFD600"
            />
        </svg>
    )
;
// export const Star = ({isFullStar = true}:P) =>
//     (
//         <svg
//             width={36}
//             height={36}
//             fill="none"
//             className={styles.star}>
//             <g filter="url(#a)">
//                 <path
//                     d="m31.925 12.414-8.927-1.297-3.99-8.09a1.119 1.119 0 0 0-.51-.51 1.13 1.13 0 0 0-1.508.51L13 11.117l-8.926 1.297a1.123 1.123 0 0 0-.622 1.92L9.91 20.63l-1.526 8.89a1.123 1.123 0 0 0 1.631 1.186L18 26.508l7.984 4.198a1.123 1.123 0 0 0 1.631-1.185L26.09 20.63l6.458-6.297c.176-.172.292-.397.327-.643a1.121 1.121 0 0 0-.95-1.276Z"
//                     fill={isFullStar ? 'url(#b)' : '#fff'}
//                 />
//                 <path
//                     d="m22.55 11.338.116.236.26.037 8.925 1.297c.347.052.58.37.529.706l-.001.005a.623.623 0 0 1-.182.357l-6.457 6.296-.189.183.045.26 1.526 8.89a.623.623 0 0 1-.51.72.616.616 0 0 1-.394-.06l-.002-.002-7.984-4.198-.233-.122-.232.122-7.984 4.198h-.001a.624.624 0 0 1-.905-.657l1.526-8.892.044-.259-.188-.183L3.8 13.975a.627.627 0 0 1 .344-1.066l8.927-1.298.26-.037.116-.236 3.99-8.087V3.25a.63.63 0 0 1 .84-.284c.122.06.221.16.282.282l3.99 8.09Z"
//                     stroke="#FFD600"
//                 />
//             </g>
//             <defs>
//                 <linearGradient
//                     id="b"
//                     x1={17.999}
//                     y1={2.401}
//                     x2={17.999}
//                     y2={30.836}
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <stop stopColor="#FFF495" />
//                     <stop offset={1} stopColor="#FEF513" />
//                 </linearGradient>
//                 <filter
//                     id="a"
//                     x={3.111}
//                     y={2.401}
//                     width={29.775}
//                     height={30.434}
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                 >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feColorMatrix
//                         in="SourceAlpha"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                         result="hardAlpha"
//                     />
//                     <feOffset dy={2} />
//                     <feComposite in2="hardAlpha" operator="out" />
//                     <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 0 0 0 0 1 0" />
//                     <feBlend
//                         in2="BackgroundImageFix"
//                         result="effect1_dropShadow_4220_84655"
//                     />
//                     <feBlend
//                         in="SourceGraphic"
//                         in2="effect1_dropShadow_4220_84655"
//                         result="shape"
//                     />
//                 </filter>
//             </defs>
//         </svg>
//     )
// ;

// const SvgComponent = (props) => (
//     <svg
//         width={30}
//         height={29}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             d="m19.55 9.338.116.236.26.037 8.925 1.297c.347.052.58.37.529.706l-.001.005a.623.623 0 0 1-.182.357l-6.457 6.296-.189.183.045.26 1.526 8.89a.623.623 0 0 1-.51.72.616.616 0 0 1-.394-.06l-.002-.002-7.984-4.198-.233-.122-.232.122-7.984 4.198h-.001a.624.624 0 0 1-.905-.657l1.526-8.892.044-.259-.188-.183L.8 11.975a.627.627 0 0 1 .344-1.066l8.927-1.298.26-.037.116-.236 3.99-8.087V1.25a.63.63 0 0 1 .84-.284c.122.06.221.16.282.282l3.99 8.09Z"
//             fill="url(#a)"
//             stroke="#FFD600"
//         />
//         <defs>
//             <linearGradient
//                 id="a"
//                 x1={14.999}
//                 y1={0.401}
//                 x2={14.999}
//                 y2={28.836}
//                 gradientUnits="userSpaceOnUse"
//             >
//                 <stop stopColor="#FFF495" />
//                 <stop offset={1} stopColor="#FEF513" />
//             </linearGradient>
//         </defs>
//     </svg>
// )

//
// const SvgComponent = (props) => (
//     <svg
//         width={46}
//         height={45}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}
//     >
//         <g filter="url(#a)">
//             <g filter="url(#b)">
//                 <path
//                     d="m36.925 14.414-8.926-1.297-3.99-8.09a1.119 1.119 0 0 0-.51-.51 1.13 1.13 0 0 0-1.509.51L18 13.117l-8.926 1.297a1.123 1.123 0 0 0-.622 1.92l6.458 6.296-1.526 8.89a1.123 1.123 0 0 0 1.631 1.186L23 28.508l7.984 4.198a1.123 1.123 0 0 0 1.631-1.185L31.09 22.63l6.458-6.297c.176-.172.292-.397.327-.643a1.121 1.121 0 0 0-.95-1.276Z"
//                     fill="url(#c)"
//                 />
//                 <path
//                     d="m27.55 13.338.116.236.26.037 8.925 1.297c.347.052.58.37.529.706l-.001.005a.623.623 0 0 1-.182.357l-6.457 6.296-.189.183.045.26 1.526 8.89a.623.623 0 0 1-.51.72.616.616 0 0 1-.394-.06l-.002-.002-7.984-4.197-.233-.123-.232.122-7.984 4.198h-.001a.624.624 0 0 1-.905-.657l1.526-8.892.044-.259-.188-.183L8.8 15.975a.627.627 0 0 1 .344-1.066l8.927-1.298.26-.037.116-.236 3.99-8.087V5.25a.63.63 0 0 1 .84-.284c.122.06.221.16.282.282l3.99 8.09Z"
//                     stroke="#FFD600"
//                 />
//             </g>
//         </g>
//         <defs>
//             <filter
//                 id="a"
//                 x={-3}
//                 y={-2}
//                 width={52}
//                 height={52}
//                 filterUnits="userSpaceOnUse"
//                 colorInterpolationFilters="sRGB"
//             >
//                 <feFlood floodOpacity={0} result="BackgroundImageFix"/>
//                 <feColorMatrix
//                     in="SourceAlpha"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                 />
//                 <feOffset dy={4}/>
//                 <feGaussianBlur stdDeviation={4}/>
//                 <feComposite in2="hardAlpha" operator="out"/>
//                 <feColorMatrix values="0 0 0 0 0.541176 0 0 0 0 0.270588 0 0 0 0 0.662745 0 0 0 0.8 0"/>
//                 <feBlend
//                     in2="BackgroundImageFix"
//                     result="effect1_dropShadow_4220_84655"
//                 />
//                 <feBlend
//                     in="SourceGraphic"
//                     in2="effect1_dropShadow_4220_84655"
//                     result="shape"
//                 />
//             </filter>
//             <filter
//                 id="b"
//                 x={8.111}
//                 y={4.401}
//                 width={29.775}
//                 height={30.434}
//                 filterUnits="userSpaceOnUse"
//                 colorInterpolationFilters="sRGB"
//             >
//                 <feFlood floodOpacity={0} result="BackgroundImageFix"/>
//                 <feColorMatrix
//                     in="SourceAlpha"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                 />
//                 <feOffset dy={2}/>
//                 <feComposite in2="hardAlpha" operator="out"/>
//                 <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.72 0 0 0 0 0 0 0 0 1 0"/>
//                 <feBlend
//                     in2="BackgroundImageFix"
//                     result="effect1_dropShadow_4220_84655"
//                 />
//                 <feBlend
//                     in="SourceGraphic"
//                     in2="effect1_dropShadow_4220_84655"
//                     result="shape"
//                 />
//             </filter>
//             <linearGradient
//                 id="c"
//                 x1={22.999}
//                 y1={4.401}
//                 x2={22.999}
//                 y2={32.836}
//                 gradientUnits="userSpaceOnUse"
//             >
//                 <stop stopColor="#FFF495"/>
//                 <stop offset={1} stopColor="#FEF513"/>
//             </linearGradient>
//         </defs>
//     </svg>
// );