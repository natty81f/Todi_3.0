import React, { Component } from 'react';
// import logo from './logo.svg';
import { database } from './firebase';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            newData: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        database.ref().on('value', snapshot => {
            this.setState({
                data: snapshot.val()
            });
        });
    }

    handleChange(event) {
        const newData = event.target.value;
        this.setState({
            newData: newData
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        database
            .ref()
            .child('AMAZING DATA')
            .push(this.state.newData);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Welcome to soon to be Todi</h2>
                </header>
                <p className="App-data">{JSON.stringify(this.state.data, null, 2)}</p>
                <form className="App-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newData}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default App;