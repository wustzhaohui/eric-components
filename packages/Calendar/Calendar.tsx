import React, { FC, MouseEvent, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Icon from '@/Icon';
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
    dayClick?: (e: MouseEvent<Element>, data: DayProps) => void
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
const Calendar: FC<CalendarProps> = ({
    date,
    className,
    title,
    dayContent,
    todayClick,
    preMonthClick,
    nextMonthClick,
    dayClick
}) => {
    const format = 'YYYY/MM/DD';
    const [_date, setDate] = useState<string>(dayjs().format(format));
    const [thead, setThead] = useState<CalendarTheadProps[]>([]);
    const [calendar, setCalendar] = useState<CalendarDataProps<DayProps>>([]);

    useEffect(() => {
        const titles: any = {
            0: '周日',
            1: '周一',
            2: '周二',
            3: '周三',
            4: '周四',
            5: '周五',
            6: '周六',
        };
        let _thead: CalendarTheadProps[] = [];
        let i = 0;
        while (i < 7) {
            _thead.push({
                name: titles[i],
                value: i,
            });
            i++;
        }
        setThead(() => _thead);
    }, []);
    useEffect(() => {
        date && setDate(() => dayjs(date).format(format));
    }, [date]);
    useEffect(() => {
        if (!_date) return;
        let _calendar: CalendarDataProps<DayProps> = [];
        const startDate = dayjs(_date).startOf('month');
        const endDate = dayjs(_date).endOf('month');
        let monthdays: DayProps[] = [];
        for (
            let i = startDate.valueOf();
            i <= endDate.valueOf();
            i = dayjs(i).add(1, 'day').valueOf()
        ) {
            monthdays.push({
                date: i,
                week: dayjs(i).day(),
                format: dayjs(i).format(format),
                day: dayjs(i).format('DD'),
                data: {},
            });
        }
        const startDay = monthdays[0];
        const endDay = monthdays[monthdays.length - 1];
        if (startDay.week !== 0) {
            // 填补上月在本周的日期
            const { format, week } = startDay;
            let frontDays = [];
            for (let i = week - 1; i >= 0; i--) {
                const date = dayjs(format).subtract(i, 'day').valueOf();
                const subtractDay = dayjs(format).subtract(i + 1, 'day');
                let data: DayContentProps = {};
                const day: DayProps = {
                    date,
                    week: subtractDay.day(),
                    format: subtractDay.format(format),
                    day: subtractDay.format('DD'),
                    data,
                };
                frontDays.push(day);
            }
            monthdays = [...frontDays, ...monthdays];
        }

        if (endDay.week !== 6) {
            const { format, week } = endDay;
            let j = 1;
            for (let i = week; i < 6; i++) {
                let data: DayContentProps = {};
                monthdays.push({
                    date: dayjs(format).add(j, 'day').valueOf(),
                    week: week + j,
                    format: dayjs(format).add(j, 'day').format(format),
                    day: dayjs(format).add(j, 'day').format('DD'),
                    data,
                });
                j++;
            }
        }
        // 根据星期分类
        let _week = [];
        for (let i = 0; i < monthdays.length; i++) {
            let data: DayContentProps = {};
            const { week, format } = monthdays[i];
            if (dayContent && Object.keys(dayContent).length) {
                data = dayContent[format];
            }
            monthdays[i].data = data;
            if (week <= 6 && week !== 0) {
                _week.push(monthdays[i]);
                if (i === monthdays.length - 1) {
                    // 如果这个月的最后几天没有星期天就把剩下的天数单独分为一周
                    _calendar.push(_week);
                    _week = [];
                }
            } else if (week == 0) {
                _calendar.push(_week);
                _week = [];
                _week.push(monthdays[i]);
            }
        }
        _calendar = _calendar.filter((item) => item.length);
        setCalendar(() => _calendar);
    }, [_date]);
    const today = (event: MouseEvent<Element>) => {
        setDate(dayjs().format(format));
        todayClick && todayClick(event, dayjs());
    };
    const _preMonthClick = (event: MouseEvent<Element>) => {
        setDate(dayjs(_date).subtract(1, 'M').format(format));
        preMonthClick && preMonthClick(event, dayjs(_date).subtract(1, 'M'));
    };
    const _nextMonthClick = (event: MouseEvent<Element>) => {
        setDate(dayjs(_date).add(1, 'M').format(format));
        nextMonthClick && nextMonthClick(event, dayjs(_date).add(1, 'M'));
    };
    const _dayClick = (event: MouseEvent<Element>, data) => {
        dayClick && dayClick(event, data)
    };
    return (
        <div className={`${className} calendar`}>
            <div className="calendar-header">
                {title ? (
                    typeof title === 'string' ? (
                        <div className={`calendar-header-title`}>{title}</div>
                    ) : (
                        title
                    )
                ) : (
                    <div className="calendar-header-title">{_date}</div>
                )}
                <div className="calendar-header-extra">
                    <span
                        className="calendar-header-extra-pre calendar-header-extra-btn p-l-1 p-r-1"
                        onClick={_preMonthClick}
                    >
                        <Icon link="h-left" />
                    </span>
                    <span className="calendar-header-extra" onClick={today}>
                        今天
                    </span>
                    <span
                        className="calendar-header-extra-next calendar-header-extra-btn p-l-1 p-r-1"
                        onClick={_nextMonthClick}
                    >
                        <Icon link="h-left-copy" />
                    </span>
                </div>
            </div>
            <div className="calendar-content">
                <table>
                    <thead>
                        <tr>
                            {thead.map((h: CalendarTheadProps) => (
                                <th
                                    key={h.value}
                                    onClick={() => h.onClick && h.onClick(h)}
                                >
                                    {h.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {calendar.map((week, index) => (
                            <tr key={index}>
                                {week.map((day) => (
                                    <td onClick={(e) => _dayClick(e, day)} key={day.day} style={{
                                        width: `${100 / week.length}%`
                                    }}>
                                        <div
                                            className={`calendar-content-day ${
                                                _date === day.format
                                                    ? 'active'
                                                    : ''
                                            }`}
                                        >
                                            {day.day}日
                                        </div>
                                        <div className="calendar-content-day-content">
                                            {day.data &&
                                                day.data.content &&
                                                day.data.content}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Calendar;
