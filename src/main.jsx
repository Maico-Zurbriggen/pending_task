import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

const basename = process.env.NODE_ENV === 'development' ? '/' : '/pending_task';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}> 
      <App /> 
    </BrowserRouter>
  </StrictMode>,
)
