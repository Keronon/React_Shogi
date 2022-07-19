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
                <div id="_gote" className="comodai">
                    <div className="taked_piece" /> <div className="taked_piece" /> <div className="taked_piece" />
                </div>
                <div id="_board">
                    <div id="_a" className="board_line">
                        <div id="_a1" className="board_piece" /> <div id="_a2" className="board_piece" /> <div id="_a3" className="board_piece" />
                        <div id="_a4" className="board_piece" /> <div id="_a5" className="board_piece" /> <div id="_a6" className="board_piece" />
                        <div id="_a7" className="board_piece" /> <div id="_a8" className="board_piece" /> <div id="_a9" className="board_piece" />
                    </div>
                    <div id="_b" className="board_line">
                        <div id="_b1" className="board_piece" /> <div id="_b2" className="board_piece" /> <div id="_b3" className="board_piece" />
                        <div id="_b4" className="board_piece" /> <div id="_b5" className="board_piece" /> <div id="_b6" className="board_piece" />
                        <div id="_b7" className="board_piece" /> <div id="_b8" className="board_piece" /> <div id="_b9" className="board_piece" />
                    </div>
                    <div id="_c" className="board_line">
                        <div id="_c1" className="board_piece" /> <div id="_c2" className="board_piece" /> <div id="_c3" className="board_piece" />
                        <div id="_c4" className="board_piece" /> <div id="_c5" className="board_piece" /> <div id="_c6" className="board_piece" />
                        <div id="_c7" className="board_piece" /> <div id="_c8" className="board_piece" /> <div id="_c9" className="board_piece" />
                    </div>
                    <div id="_d" className="board_line">
                        <div id="_d1" className="board_piece" /> <div id="_d2" className="board_piece" /> <div id="_d3" className="board_piece" />
                        <div id="_d4" className="board_piece" /> <div id="_d5" className="board_piece" /> <div id="_d6" className="board_piece" />
                        <div id="_d7" className="board_piece" /> <div id="_d8" className="board_piece" /> <div id="_d9" className="board_piece" />
                    </div>
                    <div id="_e" className="board_line">
                        <div id="_e1" className="board_piece" /> <div id="_e2" className="board_piece" /> <div id="_e3" className="board_piece" />
                        <div id="_e4" className="board_piece" /> <div id="_e5" className="board_piece" /> <div id="_e6" className="board_piece" />
                        <div id="_e7" className="board_piece" /> <div id="_e8" className="board_piece" /> <div id="_e9" className="board_piece" />
                    </div>
                    <div id="_f" className="board_line">
                        <div id="_f1" className="board_piece" /> <div id="_f2" className="board_piece" /> <div id="_f3" className="board_piece" />
                        <div id="_f4" className="board_piece" /> <div id="_f5" className="board_piece" /> <div id="_f6" className="board_piece" />
                        <div id="_f7" className="board_piece" /> <div id="_f8" className="board_piece" /> <div id="_f9" className="board_piece" />
                    </div>
                    <div id="_g" className="board_line">
                        <div id="_g1" className="board_piece" /> <div id="_g2" className="board_piece" /> <div id="_g3" className="board_piece" />
                        <div id="_g4" className="board_piece" /> <div id="_g5" className="board_piece" /> <div id="_g6" className="board_piece" />
                        <div id="_g7" className="board_piece" /> <div id="_g8" className="board_piece" /> <div id="_g9" className="board_piece" />
                    </div>
                    <div id="_h" className="board_line">
                        <div id="_h1" className="board_piece" /> <div id="_h2" className="board_piece" /> <div id="_h3" className="board_piece" />
                        <div id="_h4" className="board_piece" /> <div id="_h5" className="board_piece" /> <div id="_h6" className="board_piece" />
                        <div id="_h7" className="board_piece" /> <div id="_h8" className="board_piece" /> <div id="_h9" className="board_piece" />
                    </div>
                    <div id="_i" className="board_line">
                        <div id="_i1" className="board_piece" /> <div id="_i2" className="board_piece" /> <div id="_i3" className="board_piece" />
                        <div id="_i4" className="board_piece" /> <div id="_i5" className="board_piece" /> <div id="_i6" className="board_piece" />
                        <div id="_i7" className="board_piece" /> <div id="_i8" className="board_piece" /> <div id="_i9" className="board_piece" />
                    </div>
                </div>
                <div id="_sente" className="comodai">
                    <div className="taked_piece" /> <div className="taked_piece" /> <div className="taked_piece" /> <div className="taked_piece" /> <div className="taked_piece" />
                </div>
            </div>
            <footer>
                <h1>Created and owned by Keronon</h1>
            </footer>
        </div>
    );
}

export default App;
