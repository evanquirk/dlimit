import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css';
import App from './App'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)