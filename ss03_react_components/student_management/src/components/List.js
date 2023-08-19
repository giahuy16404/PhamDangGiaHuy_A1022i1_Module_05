import React from "react";
import {remove} from './Remove';

export function ShowList({students, updateStudent}) {
    console.log(students)
    if (!students) {
        return (
            <p/>
        )
    }
    const handleBtnRemove = (id) => (
        updateStudent(remove(id, students))
    )
    return (
        <table>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
            <tbody>
            {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button>Edit</button>
                            <button onClick={() => handleBtnRemove(student.id)}>Remove</button>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}