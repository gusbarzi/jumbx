import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presentation/App'
import { GlobalStyle } from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
