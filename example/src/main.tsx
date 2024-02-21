import { createRoot } from 'react-dom/client';
import { Calendar } from '../../packages';
const App = () => (
    <Calendar/>
);
const container = document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
root.render(<App />);
