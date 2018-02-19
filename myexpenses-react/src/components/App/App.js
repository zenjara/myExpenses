import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        // return [
        //     <Route exact path='/' component={} />,
        //     <Route path='/login' component={} />
        // ];
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
