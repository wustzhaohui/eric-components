import { FC } from 'react';

export interface IconProps {
    className?: string;
    link?: string
}

const Icon: FC<IconProps> = ({className, link}) => {
     return <svg className={`icon ${className || ''}`} aria-hidden="true">
     <use xlinkHref={`#${link}`}></use>
 </svg>;
};
export default Icon;