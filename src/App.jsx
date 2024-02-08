import React, { useEffect, useState } from "react";
import './App.css'
import Bar from '../src/assets/bar.png'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

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

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              activeClass="active"
              className='item'
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              onClick={() => setMenuOpend(false)}>Home</Link></motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              className='item'
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setMenuOpend(false)}>About me</Link></motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              className='item'
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={5}
              onClick={() => setMenuOpend(false)}>Experinace</Link></motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              className='item'
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={5}
              onClick={() => setMenuOpend(false)}>Skills</Link></motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              className='item'
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={5}
              onClick={() => setMenuOpend(false)}>Projects</Link></motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Link
              className='item'
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={5}
              onClick={() => setMenuOpend(false)}>Contact me</Link></motion.li>
        </ul>
      )}
      <motion.button
        whileHover={{
          scale: 1.1,
          originX: 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className='button btn'><a className="button-a" href="MyCv.pdf" download="Pasindu Sathsara Fernando.pdf">RESUME</a></motion.button>
    </div>
  )
}

export default App
