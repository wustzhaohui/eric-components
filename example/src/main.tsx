import { createRoot } from 'react-dom/client';
import { Button, Space } from '../../packages';
const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
const App = () => {
    return (
        <Space>
            <Button type='default'>default Button</Button>
            <Button type='primary'>Primary Button</Button>
            <Button type='dashed'>dashed Button</Button>
            <Button type='text'>text Button</Button>
            <Button danger>danger Button</Button>
            <Button type='link'>link Button</Button>
            <Button disabled>disabled Button</Button>
        </Space>
    );
};
root.render(<App />);
