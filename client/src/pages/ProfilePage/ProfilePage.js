import './ProfilePage.scss'

import { Component } from 'react';
import axios from 'axios';

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
            .get(`${urlForProfile}/auth/profile`, { withCedentials: true })
            .then(res => {
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
                                <img className='profile__avatar' src={profileData._json.profilePicture.displayImage} alt='Profile picture'/>
                                <div className='details'>
                                    <h1 className='details__name'>{profileData.displayName}</h1>
                                    <h2 className='details__headline'>Queen’s University Applied Economics Class of 2021 | Smith Certificate in Business | Full Stack Developer</h2>
                                    <p className='details__location'>Toronto, CA</p>
                                </div>
                                <LogoutButton />
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <h1>Login</h1>
                        <LoginButton />
                    </>
                )}
            </section>
        );
    }
}

export default ProfilePage;