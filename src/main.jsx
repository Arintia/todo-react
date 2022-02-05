import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' // websitemizin tamamını etkileyen css bu dosyada saklanıyor(body, html tagları vb.)
import App from './components/App/App'

// main yani en temel JSX dosyamızda app componentini render ediyoruz
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
