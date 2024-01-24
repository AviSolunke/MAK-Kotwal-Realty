import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutSideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [projectsDropdownOpened, setProjectsDropdownOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  return (
    <section className='h-wrapper'>
      <div className='avi flexCenter paddings innerWidth h-container'>
        <Link to='/' className='heading'>
          <img src='./logo.png' alt='logo' width={80} />
          <div className='headingName'>
          <h1>MAK Kotwal Realty</h1>
          <p>Real State Advisory and Broking House</p>
          </div>
        </Link>

        <OutSideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            setProjectsDropdownOpened(false);
          }}
        >
          <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
            <Link to='/about'>About Us</Link>
            <Link to='/value'>Our Values</Link>
            <div
              className='dropdown'
              onMouseEnter={() => setProjectsDropdownOpened(true)}
              onMouseLeave={() => setProjectsDropdownOpened(false)}
            >
              <Link to='/projects'>Projects</Link>
              {projectsDropdownOpened && (
                <div className='dropdown-options'>
                  <Link to='/residential'>Residential</Link>
                  <Link to='/commercial'>Commercial</Link>
                </div>
              )}
            </div>
            <Link to='/career'>Career</Link>
            <button className='button'>
              <Link to='/contact'>Contact Us</Link>
            </button>
          </div>
        </OutSideClickHandler>

        <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
