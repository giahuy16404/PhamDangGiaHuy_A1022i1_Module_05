import React, {useState} from "react";
import {ShowList} from './List';
export function Add() {

    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [students, setStudents] = useState([]);

    const [validateName, setValidateName] = useState('');
    const [validateEmail, setValidateEmail] = useState('');
    const [validatePhone, setValidatePhone] = useState('');
    const handleAddStudent = () => {
        const newStudent = {
            id: id,
            name: name,
            email: email,
            phone: phone
        };
        if (newStudent.name === '') {
            setValidateName("Không được để trống nho!")
        } else {
            setValidateName("")
        }
        if (newStudent.email === '') {
            setValidateEmail("Không được để trống nho!")
        } else {
            setValidateEmail("")
        }
        if (newStudent.phone === '') {
            setValidatePhone("Không được để trống nho!")
        } else {
            setValidatePhone("")
        }
        if (name !== '' &&
            email !== '' &&
            phone !== ''
        ) {
            setId(id + 1)
            setStudents([...students, newStudent]);
            setName('');
            setEmail('');
            setPhone('');
        }
    };
    let updateStudentList = (newStudent) =>{
        setStudents(newStudent);
    }
    return (
        <div className="App">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={event => {
                setName(event.target.value)
            }}/>
            <p style={{color: "red"}}>{validateName}</p>
            <br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={email} onChange={event => {
                setEmail(event.target.value)
            }}/>
            <p style={{color: "red"}}>{validateEmail}</p>
            <br/>
            <label htmlFor="phone">Phone: </label>
            <input type="number" id="phone" value={phone}  onChange={event => {
                setPhone(event.target.value)
            }}/>
            <p style={{color: "red"}}>{validatePhone}</p>
            <br/>
            <button onClick={handleAddStudent}>Thêm</button>
            <ShowList students={students} updateStudent={updateStudentList} />
        </div>
    );
}

