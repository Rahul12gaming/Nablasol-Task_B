import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStoreProvider } from './context/GlobalStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStoreProvider>
     <App />
    </GlobalStoreProvider>
  </StrictMode>,
)
