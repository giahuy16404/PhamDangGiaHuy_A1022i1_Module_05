import React, {useEffect, useState} from "react";

export function Timer() {
    const [time, setTime] = useState(10);
    useEffect(() => {
        const internalId = setInterval(() => {
                if (time > 0) {
                    setTime(prev => prev - 1)
                } else {
                    console.log('2')
                    alert('Chúc mừng năm mới!')
                    return () => clearInterval(internalId)
                }
            }
            , 1000)
        console.log('remove')
        return () => clearInterval(internalId);
    }, [time])
    return (
        <>
            <p>{time}</p>
            {console.log('1')}
        </>

    )
}