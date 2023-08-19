import React, {Component} from "react";
class ShowList extends Component {
    constructor() {
        const student = (id,name,age,address) => ({
            id:id,
            name: name,
            age: age,
            address: address
        })
        super();
        this.state = {
            student:[student] ,
            studentList : []
        }
    }
    render() {
        return (
            <>
                <table>
                    {this.state.student.map((value,index) => (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.address}</td>
                        </tr>
                    ))}
                </table>
            </>
        )

    }

}

export default ShowList;