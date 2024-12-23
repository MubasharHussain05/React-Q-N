import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from './components/Hooks/contextAPI/darkTheme.jsx'
// import { BioProvider } from './components/Hooks/contextAPI/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
