import {useState} from "react";

function useIncrement() {
    const [count, setCount] = useState(0)

    const increment = (value) => {
        setCount((prev) => prev + value)
    }
    return [count, increment];
}

export default useIncrement;