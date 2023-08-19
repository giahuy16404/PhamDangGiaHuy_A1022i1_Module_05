import './App.css';
import React from "react";
import {Add} from "./components/Add";
import {ShowList} from "./components/List";


function App() {
    return (
        <>
            <h1>Student List</h1>
            <div className="App">
                <Add/>
                <ShowList/>
            </div>
        </>
    );
}

export default App;
