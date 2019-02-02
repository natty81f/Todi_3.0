import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';
import todi_banner from './happy.svg';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <header className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo" />
                                    <div className="right">
                                        <div className="SignIn">
                                            <button
                                                className="btn white_outline sm"
                                                onClick={() =>
                                                    auth.signInWithPopup(
                                                        googleAuthProvider
                                                    )
                                                }
                                            >
                                                LOG IN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="hero clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <div className="text">
                                        <div className="title">
                                            A digital diary <br />
                                            for busy people
                                        </div>
                                        <div className="subtitle">
                                            Record your daily <br />
                                            thoughts and musings.
                                        </div>
                                    </div>

                                    <button
                                        className="orange btn home-login"
                                        onClick={() =>
                                            auth.signInWithPopup(googleAuthProvider)
                                        }
                                    >
                                        WRITE A TODI
                                    </button>
                                </div>
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <div className="banner_todi">
                                        <img src={todi_banner} alt="Todi background" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="SubContent clearfix hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 features">
                                <h2>
                                    Keep a record
                                    <br />
                                    of your thoughts
                                </h2>
                                <div className="detail" />
                            </div>
                            <div className="col-md-4 col-sm-6 features">
                                <h2>
                                    Keep it short or long,
                                    <br />
                                    there's no format
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
