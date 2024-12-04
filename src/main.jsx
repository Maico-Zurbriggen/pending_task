import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

const basename = process.env.NODE_ENV === 'development' ? '/' : '/pending_task'; //Especificamos la base de nuestras rutas

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}> {/*Utilizamos BrowserRouter para indicar la base de nuestras rutas*/}
    <App /> 
  </BrowserRouter>
)
