import './App.css';
import React from "react";
import CountOne from "./components/CountOne";
import CountTwo from "./components/CountTwo";

function App() {
    return (
        <header className="App-header">
            <CountOne/>
            <CountTwo/>
        </header>
    );
}

export default App;
