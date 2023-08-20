import React, {Component} from "react";
import ShowList from "./ShowList";

class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [],
            name: '',
            age: '',
            address: ''
        }
    }

    handLeChangeInput = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value,})
    }
    addStudent = () => {
        const {name, age, address} = this.state
        const newStudent = {
            id: this.state.studentList.length + 1,
            name: name,
            age: age,
            address: address
        }
        console.log(newStudent)
        this.setState({
            studentList: [...this.state.studentList, newStudent],
            name: '',
            age: '',
            address: ''
        })
    }

    render() {
        return (
            <>
                <h1>Them sinh vien</h1>
                <label>Name : </label>
                <input
                    type="text"
                    name="name"
                    onChange={this.handLeChangeInput}
                    value={this.state.name}
                /><br/>

                <label>Age : </label>
                <input
                    type="number"
                    name="age"
                    onChange={this.handLeChangeInput}
                    value={this.state.age}

                /><br/>

                <label>Address : </label>
                <input
                    type="text"
                    name="address"
                    onChange={this.handLeChangeInput}
                    value={this.state.address}

                /><br/>

                <button onClick={this.addStudent}>Add</button>
                <ShowList list={this.state.studentList}/>
            </>
        )
    }
}

export default AddStudent;