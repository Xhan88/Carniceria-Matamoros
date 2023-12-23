
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
