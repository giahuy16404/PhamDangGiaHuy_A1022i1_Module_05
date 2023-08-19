import logo from './logo.svg';
import './App.css';
import './index.css';
import React from "react";

function App() {
    const students = [
        {
            id: 2,
            company: 'Alfreds Futterkiste',
            contact: 'Maria Anders',
            country: 'Germany'
        },
        {
            id: 3,
            company: 'Centro comercial Moctezuma',
            contact: 'Francisco Chang',
            country: 'Mexico'
        },
        {
            id: 4,
            company: 'Ernst Handel',
            contact: 'Roland Mendel',
            country: 'Austria'
        },
        {
            id: 5,
            company: 'Island Trading',
            contact: 'Helen Bennett',
            country: 'UK'
        },
        {
            id: 6,
            company: 'Laughing Bacchus Winecellars',
            contact: 'Yoshi Tannamuri',
            country: 'Canada'
        },
        {
            id: 7,
            company: 'Magazzini Alimentari Riuniti',
            contact: 'Giovanni Rovelli',
            country: 'Italy'
        }
    ]
    return (
        students.map(students => (
            <tr key={students.id}>
                <td>{students.company}</td>
                <td>{students.contact}</td>
                <td>{students.country}</td>
            </tr>
        ))
    );
}

export default App;
