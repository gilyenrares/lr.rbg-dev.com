import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Navbar } from 'react-bootstrap';

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    // return {
    //   window.removeEventListener('resize', showButton)
    // }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Navbar className='navbar--custom sticky-top'>
              <Navbar.Brand href="/" onClick={closeMobileMenu}>
                <img
                  alt="infinity logo"
                  src="../images/logo.png"
                  className="d-inline-block align-top navbar-icon"
                />
                RBG-DEV
              </Navbar.Brand>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up'>
                    <Button buttonStyle='btn--danger' buttonSize='btn--medium'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up'>
                    <Button
                      buttonStyle='btn--danger'
                      buttonSize='btn--wide'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
        </Navbar>
      </IconContext.Provider>
    </>
  );
}

export default Navigation;