import React, { FC, MouseEvent } from 'react';
import { Dayjs } from 'dayjs';
import { BaseItem } from '@/types';
export interface CalendarProps {
    date?: string;
    className?: string;
    title?: string | React.ReactNode;
    dayContent?: {
        [keys: string]: DayContentProps;
    };
    todayClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
    preMonthClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
    nextMonthClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
    dayClick?: (e: MouseEvent<Element>, data: DayProps) => void;
}
export interface CalendarTheadProps extends BaseItem {
    onClick?: (data: CalendarTheadProps) => void;
}
export interface DayProps {
    date: number;
    week: number;
    format: string;
    day: string;
    data?: DayContentProps;
}
export interface DayContentProps {
    content?: string | React.ReactNode;
    [keys: string]: any;
}
export type CalendarDataProps<T> = Array<Array<T>>;
declare const Calendar: FC<CalendarProps>;
export default Calendar;
