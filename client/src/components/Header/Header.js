import React from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { Component } from 'react';

import './Header.scss';
import logo from '../../assets/logos/Hedge_name-logo2.png';

const urlForProfile = "http://localhost:1000";

class Header extends Component {
    state = {
        isAuthenticating: true,
        isLoggedIn: false,
        profileData: null
    }

    componentDidMount() {
        axios
            .get(`${urlForProfile}/auth/profile`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                this.setState({
                    isAuthenticating: false,
                    isLoggedIn: true,
                    profileData: res.data
                })
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.setState({
                        isAuthenticating: false,
                        isLoggedIn: false
                    });
                } else {
                    console.log('Error authenticating', err);
                }
            });
    }

    render() {
        const { isAuthenticating, isLoggedIn, profileData } = this.state;

        if (isAuthenticating) return null;

        return (
            <header className="header">
                {isLoggedIn ? (
                    profileData && (
                        <>
                            <div className='header__container'>
                                <Link to={'/'}>
                                    <img className="logo" src={logo} alt="Hedge company logo"/>
                                </Link>
                                <div className='search-avatar'>
                                    <input className='search-avatar__search' type="text" placeholder="Search..."></input>
                                    <NavLink to='/profile'><img className='search-avatar__avatar' src={profileData.profilePicture} alt='Profile picture'/></NavLink>
                                </div>
                            </div>
                        </>
                    )
                ) : (
                        <>
                            <div className='header__container'>
                                <Link to={'/'}>
                                    <img className="logo" src={logo} alt="Hedge company logo"/>
                                </Link>
                                <div className='search-avatar'>
                                    <input className='search-avatar__search' type="text" placeholder="Search..."></input>
                                    <NavLink to='/profile'><div className='search-avatar__avatar'/></NavLink>
                                </div>
                            </div>
                        </>
                    )}
            </header>
        );
    };
}

export default Header;