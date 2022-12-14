import './ProfilePage.scss'

import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import arrowBack from '../../assets/icons/arrow1.png'
import background from '../../assets/background.jpg'
import LoginButton from '../../components/Login/Login';
import LogoutButton from '../../components/Logout/Logout';

const urlForProfile = "http://localhost:1000";

class ProfilePage extends Component {
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
            <section className='section'>
                {isLoggedIn ? (
                    profileData && (
                        <>
                            <img className='section__block' src={background} alt='Default profile background photo'/>
                            <div className="profile">
                                <img className='profile__avatar' src={profileData.profilePicture} alt='Profile picture'/>
                                <div className='details'>
                                    <h1 className='details__name'>{profileData.displayName}</h1>
                                    <div className='details__button'>
                                        <LogoutButton />
                                    </div>
                                </div>
                                <h2 className='details__headline'>Queen’s University Applied Economics Class of 2021 | Smith Certificate in Business | Full Stack Developer</h2>
                                <p className='details__location'>Toronto, CA</p>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <div className="login-container">
                            <NavLink className="login-container__link" to={`/`}>
                                <img className="login-container__arrow" src={arrowBack} alt="Arrow back"></img>
                            </NavLink>
                            <h1 className="login-container__header">Sign in</h1>
                        </div>
                        <div className='login-container__button'>
                            <LoginButton />
                        </div>
                    </>
                )}
            </section>
        );
    }
}

export default ProfilePage;