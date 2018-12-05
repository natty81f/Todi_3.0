import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import Todis from './Todis';
import Emojis from './Emojis';
import logo from './TODI_logo_pink.svg';
import './App.css';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            todis: null
        };

        this.todiRef = database.ref('/todis');
    }

    componentDidMount() {
        auth.onAuthStateChanged(currentUser => {
            this.setState({ currentUser });

            this.todiRef.on('value', snapshot => {
                this.setState({ todis: snapshot.val() });
            });
        });
    }

    render() {
        const { currentUser, todis } = this.state;

        return (
            <div className="App">
                {!currentUser && <SignIn />}
                {currentUser && (
                    <div>
                        <header className="header white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="logo">
                                            <img src={logo} alt="logo" />
                                        </div>
                                        <div className="right">
                                            <CurrentUser user={currentUser} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="SubContent gray clearfix">
                            <div className="container">
                                <Alert stack={{ limit: 3 }} />
                                <div className="row">
                                    <Emojis />
                                    <Todis todis={todis} user={currentUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <footer class="hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {' '}
                                © 2019 Todi — Designed and developed by{' '}
                                <a href="">Hello Active</a>.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
