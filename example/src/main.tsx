import { createRoot } from 'react-dom/client';
import { Space } from '../../packages';
const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
const App = () => {
    return (
        <Space>
            <div
                style={{
                    background: 'rgba(255,34,56,.5)',
                }}
                className='111'
            >
                第一个元素
            </div>
            <div
                style={{
                    width: 100,
                    background: 'rgba(255,34,56,.8)',
                }}
            >
                第二个元素cdbnskjdfns,nf,mdsnmfndsmfnmdsnm
            </div>
        </Space>
    );
};
root.render(<App />);
