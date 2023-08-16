import React, {useState} from "react";
import './App.css';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
    const [showFormLogin, setShowFormLogin] = useState(true);
    const handleButtonClick = () => {
        setShowFormLogin(!showFormLogin);
    };

    return (
        <div>
            {showFormLogin ? (
                <SignIn onClick={handleButtonClick}/>
            ) : (
                <SignUp onClick={handleButtonClick}/>
            )}
        </div>
    );
}

export default App;
