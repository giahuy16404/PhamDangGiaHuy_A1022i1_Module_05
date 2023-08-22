import useIncrement from "../hook/useIncrement";
import React from "react";

function Increment() {
    const [countOne, incrementOne] = useIncrement(1);
    const [countTwo, incrementTwo] = useIncrement(2);

    return (
        <>
            <p>Count: {countOne}</p>
            <br/>
            <button onClick={incrementOne}>Add 1</button>
            <hr/>
            <p>Count: {countTwo}</p>
            <br/>
            <button onClick={incrementTwo}>Add 2</button>
        </>
    )
}

export default Increment;