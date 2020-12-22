import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const baseUrl = "http://localhost:3001/users";

const UserEdit = () => {
    const [editUser, seteditUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const { id } = useParams()
    console.log(id);
    const history = useHistory()

    useEffect(() => {
        axios.get(`${baseUrl}/${id}`)
            .then(res => {
                seteditUser(res.data)
            })
            .catch()
    }, [])

    const handleEditChange = (e) => {
        seteditUser({...editUser, [e.target.name]: e.target.value})
        console.log(e.target.value);
    }


    const handleUserEditSubmit = (e) => {
        e.preventDefault()
        axios.put(`${baseUrl}/${id}`, editUser)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.log(err))    
    }

    return (
        <div className="container m-5">
            <div className="card shadow-lg">
                <h1 className="m-auto mt-4">Add User</h1>
                <form onSubmit={(e)=> handleUserEditSubmit(e)} className="row g-3 p-5">
                <div className="col-md-12">
                    <input onChange={(e)=> handleEditChange(e)} type="text" name="username" value={editUser.username} className="form-control" placeholder="Enter Your UserName"/>
                </div>
                <div className="col-md-12">
                    <input onChange={(e)=> handleEditChange(e)} value={editUser.name} name="name" type="text" className="form-control" placeholder="Enter Your Full Name"/>
                </div>
                <div className="col-12">
                    <input onChange={(e)=> handleEditChange(e)} type="email" name="email" value={editUser.email} className="form-control" placeholder="Enter Your Email"/>
                </div>
                <div className="col-12">
                    <input onChange={(e)=> handleEditChange(e)} type="text" value={editUser.phone} name="phone" className="form-control" placeholder="Enter Your Phone Number"/>
                </div>
                <div className="col-md-12">
                    <input onChange={(e)=> handleEditChange(e)} type="text" value={editUser.website} name="website" className="form-control" placeholder="Enter Your website"/>
                </div>
                
                <div>
                    <button type="submit" className="btn col-12 btn-primary ">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default UserEdit
