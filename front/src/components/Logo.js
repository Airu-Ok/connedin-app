import React from 'react';
import logo2 from '../assets/images/logo2.png';
import '../assets/css/logo.css';

const Logo = () => {
  return (
    <div className='nav-logo'>
        <img src={logo2} alt="connedin" className='logo img-landing' />
        <h4>Connedin</h4>
    </div>
  )
}

export default Logo
