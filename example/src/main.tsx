import { createRoot } from 'react-dom/client';
import { Drag } from '../../packages';
const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
const App = () => {
    const onDrag = (currentIndex:number, beforeIndex:number) => {
        console.log('当前移动完成dom的索引', currentIndex)
        console.log('当前移动前dom的索引', beforeIndex)
    }
    return <Drag onDrag={onDrag}>
    {
        [1,2,3,4,5,6,7].map((item: number) => <div key={item} style={{
            backgroundColor: `rgba(255,255,255,.${item})`,
            height: 100
        }}>{item}</div>)
    }
</Drag>
};
root.render(<App />);
