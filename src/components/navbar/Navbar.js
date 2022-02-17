import React, { useEffect, useState } from 'react'
import logo from '../../assets/Asset 1.png';
import emblem from '../../assets/Cet_emblem.png'
import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false);
  const [navShrink, setnavShrink] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const shrinkNavbar = () => {
    if(window.scrollY > 100) {
      setnavShrink(true)
    } else if(window.scrollY < 20) {
      setnavShrink(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', shrinkNavbar)

  }, [])

    return (
        <div className='navbar' >
            
            <nav className={navShrink ? 'navbar navbar-shrink': 'navbar'}>
              <div className="logos">
            <img className='emblem' src={emblem} alt="cet emblem" />
            <a href="/"><img className='logo' src={logo} alt="women techno hub" /></a>
            </div>

           
            <ul className={click ? 'nav-menu active' : "nav-menu"}>

            <li className="nav-item" onClick={closeMobileMenu}><a href='#' smooth>Home</a></li>
            
            <li className="nav-item" onClick={closeMobileMenu}><a href='#about' smooth>About</a></li>
            <li className="nav-item" onClick={closeMobileMenu}><a href='#notification' smooth>Programs</a></li>
            <li className="nav-item" onClick={closeMobileMenu}><a href='#contact' smooth>Contact</a></li>
           
            
            </ul>
            

            <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </nav>
        </div>
    )
}

export default Navbar
