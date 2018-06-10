import React, { Component } from 'react';
// import logo from './logo.svg';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewTodi from './NewTodi';
import Todis from './Todis';
import './App.css';
import map from 'lodash/map';

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
                <header className="App-header">
                    <h2>Welcome to soon to be Todi</h2>
                </header>
                <div>
                    <div>
                        {!currentUser && <SignIn />}
                        {currentUser && (
                            <div>
                                <NewTodi />
                                {map(todis, (todi, key) => <p key={key}>{todi.name}</p>)}
                                <CurrentUser user={currentUser} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
