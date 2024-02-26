import React from 'react';
import { FC } from 'react';

export interface SpaceProps {
    className?: string;
    children?: React.ReactElement | Element | any;
    align?: 'start | end |center | baseline ';
    direction?: 'vertical | horizontal';
    gap?: number;
    wrap?: boolean;
}

const Space: FC<SpaceProps> = ({
    className,
    children,
    align = 'center',
    direction = 'horizontal',
    gap,
    wrap,
}) => {
    return (
        <div
            className={`${className || ''} space-container`}
            style={{
                alignItems: align,
                gap,
                flexDirection: direction === 'horizontal' ? 'row' : 'column',
                flexWrap: wrap ? 'wrap' : 'nowrap',
            }}
        >
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const childProps = child.props as { className?: string };
                    return (
                        <div
                            className={`space-item ${childProps.className || ''}`}
                            key={index}
                        >
                            {child}
                        </div>
                    );
                }
                return child;
            })}
        </div>
    );
};
export default Space;
