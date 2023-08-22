import useIncrement from "../hook/useIncrement";
import React from "react";

function CountTwo() {
    const [count, setCount] = useIncrement(2);

    return (
        <>

            <p>Count: {count}</p>
            <br/>
            <button onClick={setCount}>Add 2</button>
        </>
    )
}

export default CountTwo;