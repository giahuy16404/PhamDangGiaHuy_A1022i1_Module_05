import React from "react";

export function remove(id,students){
    return(
        students.filter((value) => value.id !== id)
    )
}

