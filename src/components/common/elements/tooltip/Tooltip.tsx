import React from 'react';
import RcTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import styles from './styles.scss';
import {TooltipProps} from 'rc-tooltip/lib/Tooltip';

export const Tooltip = (p:TooltipProps) => <RcTooltip overlayClassName={styles.content} {...p}/>;

// export const Tooltip:FC<P> = (p) => {
//     const {children, overlay} = p;
//     // const [showContent, toggleShowContent] = useState<boolean>(false);
//     //
//     // const onMouseEnter = () => {
//     //     if (disableShowing || !content) return;
//     //
//     //     toggleShowContent(true);
//     // };
//
//     return (
//         <RcTooltip placement="left" trigger={['click']} overlay={overlay}>
//             {children}
//         </RcTooltip>
//     );
//     // return (
//     //     <div>
//     //         <div data-tip data-for={id}>
//     //             {children}
//     //         </div>
//     //         <ReactTooltip
//     //             {...}
//     //             // id={id}
//     //             // effect="solid"
//     //             // border={true}
//     //             // type="light"
//     //             // place={'right'}
//     //             // multiline={true}
//     //         >{content}</ReactTooltip>
//     //     </div>
//     // );
// };

// type ContP = Omit<P, 'containerStyle' | 'children'>;

// const Content = ({tooltipStyle, content, placement = 'top'}:ContP) => {
//     const [innerClassName, setInnerClassName] = useState<string>(styles.content__inner);
//
//     useEffect(() => {
//         let isMounted = true;
//
//         setTimeout(() => {
//             if (!isMounted) return;
//
//             setInnerClassName(classNames(innerClassName, styles.content__inner_show));
//         }, 5);
//
//         return () => {
//             isMounted = false;
//         };
//     }, []);
//
//     const st = {
//         ...tooltipStyle,
//         ...placement === 'top' ? {
//             bottom: '100%'
//         } : {
//             bottom: 'initial',
//             top: '100%',
//             left: '0'
//         }
//     };
//
//     return (
//         <div className={styles.content} style={st}>
//             <div className={innerClassName}>{content}</div>
//         </div>
//     );
// };
// type P = {
//     disableShowing?:boolean;
//     content:ReactNode;
//     containerStyle?:CSSProperties;
//     tooltipStyle?:CSSProperties;
//     placement?:'top' | 'bottom';
// };
//
// export const Tooltip:FC<P> = (p) => {
//     const {children, content, containerStyle, placement, tooltipStyle, disableShowing = false} = p;
//
//     const [showContent, toggleShowContent] = useState<boolean>(false);
//
//     const onMouseEnter = () => {
//         if (disableShowing || !content) return;
//
//         toggleShowContent(true);
//     };
//
//     return (
//         <div
//             className={styles.tooltip}
//             style={containerStyle}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={() => toggleShowContent(false)}>
//             {showContent &&
//                 <Content content={content} tooltipStyle={tooltipStyle} placement={placement}/>}
//             {children}
//         </div>
//     );
// };
//
// type ContP = Omit<P, 'containerStyle' | 'children'>;
//
// const Content = ({tooltipStyle, content, placement = 'top'}:ContP) => {
//     const [innerClassName, setInnerClassName] = useState<string>(styles.content__inner);
//
//     useEffect(() => {
//         let isMounted = true;
//
//         setTimeout(() => {
//             if (!isMounted) return;
//
//             setInnerClassName(classNames(innerClassName, styles.content__inner_show));
//         }, 5);
//
//         return () => {
//             isMounted = false;
//         };
//     }, []);
//
//     const st = {
//         ...tooltipStyle,
//         ...placement === 'top' ? {
//             bottom: '100%'
//         } : {
//             bottom: 'initial',
//             top: '100%',
//             left: '0'
//         }
//     };
//
//     return (
//         <div className={styles.content} style={st}>
//             <div className={innerClassName}>{content}</div>
//         </div>
//     );
// };