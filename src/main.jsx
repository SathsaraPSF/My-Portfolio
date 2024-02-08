import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Expireance/Experience.jsx'
import Skills from './components/Skills/Skills.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <About />
    <Experience />
    <Skills />

  </React.StrictMode>,
)