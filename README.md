# Eric Chao's work components

- Calendar
```
// 日历组件的类名称
className?: string;
// 左上角显示的标题 默认不设置显示传入的日期
title?: string | React.ReactNode;
// 需要在某个日期显示的内容
dayContent?: {
    [keys: string]: DayContentProps;
};
// 点击今天事件触发的事件
todayClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
// 点击上一天触发的事件
preMonthClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
// 点击下一天触发的事件
nextMonthClick?: (e: MouseEvent<Element>, date: Dayjs) => void;
// 点击某天日期触发的事件
dayClick?: (e: MouseEvent<Element>, data: DayProps) => void
interface DayContentProps {
    content?: string | React.ReactNode;
    [keys: string]: any;
}
```
- Icon
```
// icon组件
[可备选图标](https://www.iconfont.cn/manage/index?manage_type=myprojects&spm=a313x.7781069.1998910419.10.5lH6JG&projectId=4438865)
```
