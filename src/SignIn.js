import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';
import logo from './TODI_logo_white.svg';
import todi_banner from './happy.svg';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <header className="header">
                        <div className="container">
                            <div className="row">
                                <div className="logo">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="right">
                                    <div className="SignIn">
                                        <button
                                            className="btn white_outline"
                                            onClick={() =>
                                                auth.signInWithPopup(googleAuthProvider)
                                            }
                                        >
                                            LOG IN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="hero clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="title">
                                        A digital diary <br />
                                        for busy people
                                    </div>
                                    <div className="subtitle">
                                        Record you daily <br />
                                        musings and thoughts.
                                    </div>

                                    <button
                                        className="orange btn"
                                        onClick={() =>
                                            auth.signInWithPopup(googleAuthProvider)
                                        }
                                    >
                                        WRITE A TODI
                                    </button>
                                </div>
                                <div className="col-md-5">
                                    <div className="banner_todi">
                                        <img src={todi_banner} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="SubContent clearfix">
                    <div className="l-container">
                        <div className="row">
                            <div className="col-md-4 features">
                                <h2>
                                    Keep a records of <br />
                                    your moods
                                </h2>
                                <div className="detail" />
                            </div>
                            <div className="col-md-4 features">
                                <h2>
                                    Check your stats <br />
                                    daily and yearly
                                </h2>
                                <div className="detail" />
                            </div>
                            <div className="col-md-4" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SignIn;
