import {useState} from "react";

function useIncrement(valueDefault) {
    if (!valueDefault) {
        valueDefault = 0;
    }

    const [count, setCount] = useState(valueDefault)
    console.log(count)

    const increment = (value) => {
        setCount((prev) => prev + value)
    }
    return [count, increment];
}

export default useIncrement;