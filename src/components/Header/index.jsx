import React from 'react';
import PropTypes from 'prop-types';
import 'boxicons'
import './styles.css'
import logo from './img/logo.png';
Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className='heading__bar'>
            <a href="#" className='heading__logo'>
            <img src={logo} alt="Logo"  />
            </a>
            <ul className='heading__bar__menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Partners</a></li>
            </ul>
            <a href="#" className='heading__contact'>
                Contact me
                
                <box-icon name='right-arrow-alt'></box-icon>
               
            </a>
        </div>
    );
}

export default Header;