import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg'

import './Header.scss';
import logo from '../../assets/logos/Hedge_name-logo2.png';

const Header = () => {

    return (
        <header className="header">
            <div className='header__container'>
                <Link to={'/'}>
                    <img className="logo" src={logo} alt="Hedge company logo"/>
                </Link>
                <div className='search-avatar'>
                    <input className='search-avatar__search' type="text" placeholder="Search..."></input>
                    <NavLink to='/profile'><img className='search-avatar__avatar' src={avatar} alt='Profile picture'/></NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;