import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import Todis from './Todis';
import Emojis from './Emojis';
import pick from 'lodash/pick';
import './App.css';

import { Tabs, Tab } from 'react-bootstrap';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
            todis: null,
            user: null,
            users: null
        };

        this.todiRef = database.ref('/todis');
        this.userRef = database.ref('/users');
    }

    componentDidMount() {
        auth.onAuthStateChanged(author => {
            this.setState({ author });

            this.todiRef.on('value', snapshot => {
                this.setState({ todis: snapshot.val() });
            });
        });

        auth.onAuthStateChanged(users => {
            this.setState({ users });

            this.userRef.on('value', snapshot => {
                this.setState({ users: snapshot.val() });
            });
        });

        auth.onAuthStateChanged(user => {
            if (user) {
                this.userId = user.uid;
                database
                    .ref('users')
                    .child(user.uid)
                    .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
            }
        });
    }

    render() {
        const { todis, users, author } = this.state;

        return (
            <div className="App">
                {!author && <SignIn />}
                {author && (
                    <div>
                        <header className="header white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="logo pink" />
                                        <div className="right">
                                            <CurrentUser author={author} />
                                        </div>
                                        <Tabs
                                            defaultActiveKey={2}
                                            className="tabs"
                                            id="navigation-tabs"
                                        >
                                            <Tab
                                                eventKey={1}
                                                tabClassName="write-icon"
                                                title="Write a Todi"
                                            >
                                                <Emojis author={author} />
                                                test 3
                                            </Tab>
                                            <Tab
                                                eventKey={2}
                                                tabClassName="read-icon"
                                                title="Todis"
                                            >
                                                <Todis
                                                    todis={todis}
                                                    user={author}
                                                    author={author}
                                                    users={users}
                                                />
                                                test 2
                                            </Tab>
                                            <Tab
                                                eventKey={3}
                                                tabClassName="profile-icon"
                                                title="Profile"
                                            >
                                                User Profile goes here
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
