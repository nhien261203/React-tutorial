import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ThemeProvider } from './ConText/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>

    </StrictMode>,
  </Provider>

)
