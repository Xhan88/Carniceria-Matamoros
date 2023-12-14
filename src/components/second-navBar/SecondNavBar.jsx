
import React from 'react';
import '../second-navBar/secondNavBar.css';

const SecondNavBar = () => {
  return (
    <div>
      
      <nav className="navbar">
        <div className="navbar-container">
          <img className='car-logo' src="./carn-logo.png" alt="" />
          <ul>
            <li className='li-hover'>Home</li>
            <li className='li-hover'>About</li>
            <li className='li-hover'>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SecondNavBar;
