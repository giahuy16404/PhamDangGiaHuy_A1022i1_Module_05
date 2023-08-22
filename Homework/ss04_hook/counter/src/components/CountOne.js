import useIncrement from "../hook/useIncrement";
import React from "react";

function CountOne() {
    const [count, setCount] = useIncrement(1);

    return (
        <>
            <p>Count: {count}</p>
            <br/>
            <button onClick={setCount}>Add 1</button>
        </>
    )
}

export default CountOne;