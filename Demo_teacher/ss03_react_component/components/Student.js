import {Component} from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentName: "",
            studentList: ['HaiTT', 'CongNT']
        }
    }

    componentWillMount() {
    }

    addStudent() {
        this.setState({
            studentList: [...this.state.studentList, this.state.studentName],
            studentName: ""
        });
    }

    handleInputName(value) {
        this.setState({
            studentName: value
        })
    }

    render() {
        return (
            <>
                <input value={this.state.studentName} onChange={(event) => this.handleInputName(event.target.value)}/>
                <button onClick={() => this.addStudent()}>Add</button>
                <ul>
                    {this.state.studentList.map((student, index) => {
                        return <li key={index}>{student}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default Student;
