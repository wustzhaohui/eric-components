import React, { RefObject, useRef } from 'react';
import { FC } from 'react';

export interface DragProps {
    className?: string;
    children: React.ReactElement | Element | any;
    onDrag?: (currentIndex: number, beforeIndex: number) => void;
}

const Drag: FC<DragProps> = ({ className, children, onDrag }) => {
    const dragContainer: RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>(null);
    const currentDom = useRef<HTMLElement | null>(null);
    const currentIndex = useRef<number>();
    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.effectAllowed = 'move';
        if (e.target instanceof HTMLElement) {
            currentDom.current = e.target as HTMLElement;
            currentIndex.current = dragContainer.current
                ? Array.from(dragContainer.current.childNodes).indexOf(e.target)
                : -1;
            currentDom.current.classList.add('moving');
        }
    };

    const handleDragover = (e: React.DragEvent) => {
        e.preventDefault();
    };
    const handleDragend = (e: React.DragEvent) => {
        currentDom.current?.classList.remove('moving');
        if (!dragContainer.current || !currentDom.current) return;
        let liArray = Array.from(dragContainer.current.childNodes);
        onDrag &&
            onDrag(
                liArray.indexOf(currentDom.current),
                currentIndex.current as number
            );
    };
    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        if (!dragContainer.current || !currentDom.current) return;
        if (
            e.target === currentDom.current ||
            e.target === dragContainer.current
        ) {
            return;
        }
        let liArray = Array.from(dragContainer.current.childNodes);
        let _currentIndex = liArray.indexOf(currentDom.current);
        let targetindex = liArray.indexOf(e.target as ChildNode);
        if (_currentIndex < targetindex) {
            dragContainer.current.insertBefore(
                currentDom.current,
                (e.target as Element).nextElementSibling
            );
        } else {
            dragContainer.current.insertBefore(
                currentDom.current,
                e.target as ChildNode
            );
        }
    };
    return (
        <div
            ref={dragContainer}
            className={`drag-container ${className}`}
            onDragOver={handleDragover}
            onDragEnd={handleDragend}
            onDragEnter={handleDragEnter}
        >
            {React.Children.map(children, (child: React.ReactElement, index: number) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement, {
                        draggable: true,
                        onDragStart: handleDragStart,
                        key: index
                    });
                }
                return child;
            })}
        </div>
    );
};

export default Drag;
