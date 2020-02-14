/*
import React from 'react';

import { Routes } from './Routes';

function App() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
*/

import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <span>
                    <Link to="/List">Units</Link>
                </span>
                <h1>SitoSito</h1>
            </div>
        )
    }
}

export default App;
