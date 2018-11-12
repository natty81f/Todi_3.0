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
                    <div className="l-inner-fullwidth">
                        <div className="row">
                            <header className="header white">
                                <div className="l-container">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="right">
                                        {' '}
                                        <CurrentUser user={currentUser} />
                                    </div>
                                </div>
                            </header>
                            <div className="SubContent gray clearfix">
                                <Alert stack={{ limit: 3 }} />
                                <div className="l-container">
                                    <Emojis />
                                    <Todis todis={todis} user={currentUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
