import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { CookiesProvider } from 'react-cookie'
import { theme } from './theme'
import { App } from './App'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './models/init'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Provider store={store}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </Provider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
