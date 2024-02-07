
import './App.css'
import Bar from '../src/assets/bar.png'

function App() {
  return (
    <div className='nav'>
      <span className='logo'>
        <span className='logo-p'>P</span>
        <span className='logo-s'>s</span>
        <div className='logo-dot'></div>
      </span>
      <ul className='nav-items'>
        <li><a className='item' href='#home'>Home</a></li>
        <li><a className='item' href='#aboutme'>About me</a></li>
        <li><a className='item' href='#experinace'>Experinace</a></li>
        <li><a className='item' href='#skills'>Skills</a></li>
        <li><a className='item' href='#contactme'>Contact me</a></li>
      </ul>
      <button className='button btn'>Resume</button>
    </div>
  )
}

export default App
