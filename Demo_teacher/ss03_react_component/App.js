import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Student from "./components/Student";
import AsyncState from "./components/AsyncState";

function App() {
    const name = "HaiTT";
    return (
        <>
            {/*<Header nameStudent = {name} />*/}
            <Student />
            <AsyncState/>
        </>
    );
}

export default App;
