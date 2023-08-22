import useIncrement from "../hook/useIncrement";
import React from "react";

function CountOne() {
    const [count, setCount] = useIncrement();

    const handleBtnIncrement = () => {
        setCount(1)
    }

    return (
        <>
            <p>Count: {count}</p>
            <br/>
            <button onClick={handleBtnIncrement}>Add 1</button>
        </>
    )
}

export default CountOne;