import React from "react";

export function update(id,student) {
    const studentUpdate = student.filter((value) => value === id)
    return (
        studentUpdate.map(student =>
            <tr key={student.id}>
                <td><input type={"text"} value={student.name}/></td>
                <td><input type={"text"} value={student.email}/></td>
                <td><input type={"text"} value={student.phone}/></td>
            </tr>
        )
    )
}