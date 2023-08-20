import AddStudent from "./AddStudent";
import React from "react";

const ShowList = ({list}) => {
    return (
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                <tbody>
                {
                    list.map(value => (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.address}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
}
export default ShowList;