import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'maico-zurbriggen.github.io/index.css'
import App from 'maico-zurbriggen.github.io/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
