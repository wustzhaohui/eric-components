import { BaseSize } from '@/types';
import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';
import { Icon } from '..';
export type ButtonHtmlType = 'submit' | 'reset' | 'button';
export type ButtonShape = 'default' | 'circle' | 'round';
export interface ButtonProps {
    children?: ReactNode | null | string;
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: ButtonHtmlType;
    icon?: ReactNode | string;
    shape?: ButtonShape;
    size?: BaseSize;
    style?: CSSProperties;
    target?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    type = 'default',
    block,
    danger,
    disabled,
    ghost,
    href,
    htmlType,
    icon,
    shape,
    size = 'small',
    style,
    target,
}) => {
    const renderIcon = (): ReactNode => {
        if (icon) {
            return typeof icon === 'string' ? <Icon link={icon} /> : icon;
        } else {
            return null;
        }
    };
    return type === 'link' ? (
        <div className={`btn btn-${type} cursor-pointer`}>
            {renderIcon()}
            <a href={href} target={target}>{children}</a>
        </div>
    ) : (
        <button
            style={style}
            className={`btn  btn-${type} btn-${
                block ? 'block' : ''
            } btn-${danger ? 'danger' : ''} btn-${
                disabled ? 'disabled' : ''
            } btn-${ghost ? 'ghost' : ''} btn-${
                shape ? shape : ''
            } btn-${size} cursor-pointer transition`}
            disabled={disabled}
            type={htmlType}
            onClick={onClick}
        >
            {renderIcon()}
            {children}
        </button>
    );
};
export default Button;
