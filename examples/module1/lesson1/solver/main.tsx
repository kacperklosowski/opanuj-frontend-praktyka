import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Calculator />);
}
