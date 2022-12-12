import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './Nav.scss';
import homeIcon from '../../assets/icons/home1.png'
import searchIcon from '../../assets/icons/search1.png'
import notificationsIcon from '../../assets/icons/notifications1.png'
import messagesIcon from '../../assets/icons/messages1.png'
import watchlistIcon from '../../assets/icons/watchlist1.png'
import profileIcon from '../../assets/icons/profile1.png'
import settingsIcon from '../../assets/icons/settings1.png'

const Nav = () => {

    const navigateFormPage = useNavigate();

    const handleNewClick = () => {
    navigateFormPage('/add');
    };

    return (
        <div className="nav">

            <NavLink to='/'>
                <div className='nav__container'>
                    <img className='nav__icon' src={homeIcon} alt='Home icon'/>
                    <p className='nav__item'>Home</p>
                </div>
            </NavLink>

            <NavLink to='/search'>
                <div className='nav__container'>
                    <img className='nav__icon' src={searchIcon} alt='Search icon'/>
                    <p className='nav__item'>Search</p>
                </div>
            </NavLink>

            <NavLink to='/notifications'>
                <div className='nav__container'>
                    <img className='nav__icon' src={notificationsIcon} alt='Notifications icon'/>
                    <p className='nav__item'>Notifications</p>
                </div>
            </NavLink>

            <NavLink to='/messages'>
                <div className='nav__container'>
                    <img className='nav__icon' src={messagesIcon} alt='Messages icon'/>
                    <p className='nav__item'>Messages</p>
                </div>
            </NavLink>

            <NavLink to='/watchlist'>
                <div className='nav__container'>
                    <img className='nav__icon' src={watchlistIcon} alt='Watchlist icon'/>
                    <p className='nav__item'>Watchlist</p>
                </div>
            </NavLink>

            <NavLink to='/profile'>
                <div className='nav__container'>
                    <img className='nav__icon' src={profileIcon} alt='Profile icon'/>
                    <p className='nav__item'>Profile</p>
                </div>
            </NavLink>

            <NavLink to='/settings'>
                <div className='nav__container'>
                    <img className='nav__icon' src={settingsIcon} alt='Settings icon'/>
                    <p className='nav__item'>Settings</p>
                </div>
            </NavLink>

            <button onClick={handleNewClick} className="nav__add">POST</button>

        </div>
    );
};

export default Nav;