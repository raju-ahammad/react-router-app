import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const baseUrl = "http://localhost:3001/users";

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        loadUser()
        console.log("Data ");
    }, [])

    const loadUser = async () => {
        const result = await axios.get(baseUrl)
        console.log(result);
        setUsers(result.data)
    }

    const userDelete = (id) => {
        const findId = users.find((user) => user.id === id)

        axios.delete()
        .then()
        .catch()
    }

    

    console.log(users);
    return (
        <div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/${user.id}`}>View</Link>
                                        <button className="btn btn-danger mr-2">Delete</button>
                                        <Link className="btn btn-outline-primary" to={`edit/${user.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
