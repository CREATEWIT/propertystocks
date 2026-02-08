import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { PropertiesProvider } from './state/PropertiesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PropertiesProvider>
        <App />
      </PropertiesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
