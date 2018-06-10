import React, { Component } from 'react';
// import logo from './logo.svg';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewTodi from './NewTodi';
import Todis from './Todis';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(currentUser => {
            console.log('AUTH CHNAGED', currentUser);
            this.setState({ currentUser });
        });
    }

    render() {
        const { currentUser } = this.state;

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
