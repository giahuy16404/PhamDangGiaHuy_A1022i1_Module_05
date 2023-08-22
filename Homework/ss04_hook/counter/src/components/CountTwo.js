import useIncrement from "../hook/useIncrement";
import React from "react";

function CountTwo() {
    const [count, setCount] = useIncrement();
    const handleBtnIncrement = () => {
        setCount(2)
    }

    return (
        <>
            <p>Count: {count}</p>
            <br/>
            <button onClick={handleBtnIncrement}>Add 2</button>
        </>
    )
}

export default CountTwo;