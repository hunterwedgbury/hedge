import "./AddPage.scss";
import Add from '../../components/Add/Add'
import arrowBack from '../../assets/icons/arrow1.png'
import LoginButton from '../../components/Login/Login';

import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const urlForProfile = "http://localhost:1000";

class AddPage extends Component {
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

            <div className="add">
                {isLoggedIn ? (
                    profileData && (
                        <>
                            <div className="add-container">
                                <NavLink className="add-container__link" to={`/`}>
                                    <img className="add-container__arrow" src={arrowBack} alt="Arrow back"></img>
                                </NavLink>
                                <h1 className="add-container__header">New Post</h1>
                            </div>

                            <Add />
                        </>
                    )
                ) : (
                    <>
                        <div className="add-container">
                            <NavLink className="add-container__link" to={`/`}>
                                <img className="add-container__arrow" src={arrowBack} alt="Arrow back"></img>
                            </NavLink>
                            <h1 className="add-container__header">Sign in</h1>
                        </div>
                        <div className='add-container__button'>
                            <LoginButton />
                        </div>
                    </>
                )}
            </div>

        );
    };
}

export default AddPage;