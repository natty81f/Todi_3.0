import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import Todis from './Todis';
import Emojis from './Emojis';
import ProfileCard from './ProfileCard';
import pick from 'lodash/pick';
import './App.css';

import { Tabs, Tab } from 'react-bootstrap';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.usersRef = null;
        this.userRef = null;
        this.state = {
            todis: null,
            user: null,
            users: {}
        };

        this.todiRef = database.ref('/todis');
        this.usersRef = database.ref('/users');
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ user });

            if (user) {
                this.userRef = this.usersRef.child(user.uid);

                this.userRef.once('value').then(snapshot => {
                    if (snapshot.val()) return;
                    database
                        .ref('users')
                        .child(user.uid)
                        .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
                });
            }

            this.todiRef.on('value', snapshot => {
                this.setState({ todis: snapshot.val() });
            });

            this.usersRef.on('value', snapshot => {
                this.setState({ users: snapshot.val() });
            });
        });
    }

    render() {
        const { todis, users, user } = this.state;

        return (
            <div className="App">
                {!user && <SignIn />}
                {user && (
                    <div>
                        <header className="header white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="logo pink" />
                                        <div className="right">
                                            <CurrentUser user={user} />
                                        </div>
                                        <Tabs
                                            defaultActiveKey={1}
                                            className="tabs"
                                            id="navigation-tabs"
                                        >
                                            <Tab
                                                eventKey={1}
                                                tabClassName="write-icon"
                                                title="Write a Todi"
                                            >
                                                <Emojis user={user} />
                                            </Tab>
                                            <Tab
                                                eventKey={2}
                                                tabClassName="read-icon"
                                                title="Todis"
                                            >
                                                <Todis
                                                    todis={todis}
                                                    user={user}
                                                    users={users}
                                                />
                                            </Tab>
                                            <Tab
                                                eventKey={3}
                                                tabClassName="profile-icon"
                                                title="Profile"
                                            >
                                                <ProfileCard user={user} />
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="gray clearfix">
                            <div className="container">
                                <Alert stack={{ limit: 3 }} />
                            </div>
                        </div>
                    </div>
                )}
                <footer className="hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {' '}
                                © 2019 Todi — Designed and developed by{' '}
                                <a href="https://helloactive.co/">Hello Active</a>.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
