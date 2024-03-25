
import React, { useEffect, useState } from 'react';
import './SecondNavBar.css';

const SecondNavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para un desplazamiento suave
    });
  };
  
  // <button onClick={scrollToTop}>Volver arriba</button>

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

  return (
    <div>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="navbar-container">
          <img onClick={scrollToTop} className='car-logo' src="./carn-logo.png" alt="" />
          <ul>
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
