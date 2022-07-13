import React from 'react';

import './App.css';

import { ReactComponent as Logo } from './IMGs/king.svg';

function App() {
    return (
        <div id="_App">
            <header>
                <Logo id="_logo" />
                <h1>SHOGI</h1>
            </header>
            <div id="_content">
                <div id="_board">

                </div>
            </div>
            <footer>
                <h1>Created and owned by Keronon</h1>
            </footer>
        </div>
    );
}

export default App;
