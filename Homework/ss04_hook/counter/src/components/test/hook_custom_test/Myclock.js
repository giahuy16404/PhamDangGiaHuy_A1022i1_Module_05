import {useClock} from "./useClock";
import React from "react";

export function MyClock() {
    const [time,ampm] = useClock();

    return (
        <div id="Clock-style">
            {time}
            <span> {ampm}</span>
        </div>
    );
}