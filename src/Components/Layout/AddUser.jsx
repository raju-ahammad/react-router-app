import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const baseUrl = "http://localhost:3001/users";
const AddUser = () => {
    
    const [addUser, setAddUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const history = useHistory()

    const handleAddUser = (e) => {
        setAddUser({...addUser, [e.target.name]: e.target.value})
        console.log(e.target.value);
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()
        axios.post(baseUrl, addUser)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))
            
            
    }

    return (
        <div className="container m-5">
            <div className="card shadow-lg ml-md-5" style={{ width:"70%"}}>
                <h1 className="m-auto mt-4">Add User</h1>
                <form onSubmit={(e)=> handleUserSubmit(e)} className="row g-3 p-5">
                <div className="col-md-12">
                    <input onChange={(e)=> handleAddUser(e)} type="text" name="username" value={addUser.username} className="form-control" placeholder="Enter Your UserName"/>
                </div>
                <div className="col-md-12">
                    <input onChange={(e)=> handleAddUser(e)} value={addUser.name} name="name" type="text" className="form-control" placeholder="Enter Your Full Name"/>
                </div>
                <div className="col-12">
                    <input onChange={(e)=> handleAddUser(e)} type="email" name="email" value={addUser.email} className="form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="col-12">
                    <input onChange={(e)=> handleAddUser(e)} type="text" value={addUser.phone} name="phone" className="form-control" placeholder="Enter Your Phone Number"/>
                </div>
                <div className="col-md-12">
                    <input onChange={(e)=> handleAddUser(e)} type="text" value={addUser.website} name="website" className="form-control" placeholder="Enter Your website"/>
                </div>
                
                <div>
                    <button type="submit" className="btn col-12 btn-primary ">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default AddUser
