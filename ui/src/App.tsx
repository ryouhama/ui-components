import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PublicRouter } from './routes';

function App() {
  return (
    <BrowserRouter >
      <PublicRouter />
    </BrowserRouter>
  );
}

export default App;
