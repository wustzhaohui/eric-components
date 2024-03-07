import { createRoot } from 'react-dom/client';
import { Button, Space } from '../../packages';
const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
const App = () => {
    return (
        <Space direction="vertical">
            <Space>
                <Button type="default">default Button</Button>
                <Button type="primary">Primary Button</Button>
                <Button type="dashed">dashed Button</Button>
                <Button type="text">text Button</Button>
                <Button danger>danger Button</Button>
                <Button type="link">link Button</Button>
            </Space>
            <Space>
                <Button disabled>default disabled Button</Button>
                <Button type="dashed" disabled>
                    dashed disabled Button
                </Button>
                <Button type="primary" disabled>
                    primary disabled Button
                </Button>
                <Button type="text" disabled>
                    text disabled Button
                </Button>
                <Button danger disabled>
                    danger disabled Button
                </Button>
            </Space>
            <Space>
                <Button size="small">Small Size</Button>
                <Button>default Size</Button>
                <Button size="large">Large Size</Button>
            </Space>
            <Space>
                <Button shape='circle'>circle</Button>
                <Button shape="round">round</Button>
            </Space>
        </Space>
    );
};
root.render(<App />);
