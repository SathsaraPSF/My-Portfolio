import React, { useEffect, useState } from "react";
import './App.css'
import Bar from '../src/assets/bar.png'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [mobile, setMobile] = useState(window.innerWidth <= 600);
  const [menuOpend, setMenuOpend] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='nav'>
      <span className='logo'>
        <span className='logo-p'>P</span>
        <span className='logo-s'>s</span>
        <div className='logo-dot'></div>
      </span>
      {menuOpend === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--btn-color)",
            width: "5vw",
            display: "flex",
            justifyContent: "center",
            padding: "2vw",
            borderRadius: "1vw",
            position: "fixed",
            left: "85vw",
            marginTop: "2.5vw",
            top: "4.5vw",
            zIndex: "99",
          }}
        >

          <FontAwesomeIcon icon={faHamburger} className='menu-icon' onClick={() => setMenuOpend(true)} />

        </div>
      ) : (
        <ul className='nav-items'>

          <li>
            <Link
              activeClass="active"
              className='item'
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              onClick={() => setMenuOpend(false)}>Home</Link></li>

          <li>
            <Link
              className='item'
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setMenuOpend(false)}>About me</Link></li>

          <li>
            <Link
              className='item'
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={5}
              onClick={() => setMenuOpend(false)}>Experinace</Link></li>

          <li><Link className='item' href='#skills' onClick={() => setMenuOpend(false)}>Skills</Link></li>
          <li><Link className='item' href='#contactme' onClick={() => setMenuOpend(false)}>Contact me</Link></li>
        </ul>
      )}
      <button className='button btn'>Resume</button>
    </div>
  )
}

export default App
