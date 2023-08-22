import {useState} from "react";

function useIncrement(value) {
    const [count, setCount] = useState(value)

    const increment = () => {
        setCount((prev) => prev + value)
    }
    return [count, increment];
}

export default useIncrement;