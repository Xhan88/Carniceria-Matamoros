import React, { useEffect, useState } from 'react';
import './SecondNavBar.css';

const SecondNavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para controlar el menú de hamburguesa

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Abrir o cerrar el menú al hacer clic en el botón de hamburguesa
  };

  return (
    <div>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="navbar-container">
          <img onClick={scrollToTop} className='car-logo' src="./carn-logo.png" alt="Logo" />
          
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776; {/* Icono de hamburguesa */}
          </div>

          <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <li className='li-hover'>Home</li>
            <li className='li-hover'>About</li>
            <li className='li-hover'>Products</li>
            <li className='li-hover'>Contact</li>
          </ul>
          
          <h3 className='phone-number'>378 78 2 0347</h3>
        </div>
      </nav>
    </div>
  );
}

export default SecondNavBar;
