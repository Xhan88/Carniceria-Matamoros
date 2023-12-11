import React from 'react'
import '../second-navBar/secondNavBar.css'

const SecondNavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <img className='car-logo' src="./carn-logo.png" alt="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );

}

export default SecondNavBar
