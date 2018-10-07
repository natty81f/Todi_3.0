import React, { Component } from 'react';
// import logo from './logo.svg';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import Todis from './Todis';
import Emojis from './Emojis';
import './App.css';

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
                    {!currentUser && <SignIn />}
                    {currentUser && (
                        <div>
                            <Emojis />
                            <Todis todis={todis} user={currentUser} />
                            <CurrentUser user={currentUser} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
