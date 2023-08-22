import React, {useEffect, useState} from "react";

export function Selector() {
    const [selected, setSelected] = useState('')
    const [valueSelected, setValueSelected] = useState('')
    console.log(selected)
    console.log(valueSelected)
    useEffect(() => {
        switch (selected) {
            case 'Java':
                setValueSelected('Java')
                break;
            case 'Angular':
                setValueSelected('Angular')
                break;
            case 'Javascript':
                setValueSelected('Javascript')
                break;
            case 'Php':
                setValueSelected('Php')
                break;
            default:

        }
    }, [selected])
    return (
        <>
            <select
                onChange={event => setSelected(event.target.value)}
            >
                <option value="Java">Java</option>
                <option value="Angular">Angular</option>
                <option value="Javascript">Javascript</option>
                <option value="Php">Php</option>
            </select>
            <h3>{valueSelected}</h3>
        </>
    )

}