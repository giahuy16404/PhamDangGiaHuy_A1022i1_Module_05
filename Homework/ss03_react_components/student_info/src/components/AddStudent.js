import React, {Component} from "react";

class AddStudent extends Component{
    constructor() {
        super();
        this.state = {
            student:[],
            studentList : []
        }

    }
    student = (id,name,age,address) => ({
        id:id,
        name: name,
        age: age,
        address: address
    })
    addStudent() {
        this.setState({
            studentList:[...this.state.studentList,this.student]
            }
        )
        console.log(this.state.studentList)

    }
    render() {
        return (
            <>
               <h1>Them sinh vien</h1>
                <label>Name : </label>
                <input type={'text'} onChange={event => this.student(0,event.target.value,0,'',) }/><br/>

                <label>Age : </label>
                <input type={'number'} onChange={event => this.student(0,'',event.target.value,'',) }/><br/>

                <label>Address : </label>
                <input type={'text'} onChange={event => this.student(0,'',0,event.target.value,) }/><br/>

                <button onClick={this.addStudent()}>Add</button>
            </>
        )

    }
}
export default AddStudent;