import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = "http://localhost:3001/users";

const UserDetail = () => {
    const [user, setUser] = useState("")
    const { id } = useParams()

    useEffect(()=> {
        axios.get(`${baseUrl}/${id}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    console.log("user", user);
    return (
        <div>
            <h1>{ user.name }</h1>
            <p>{ user.username }</p>
            <p>{ user.email }</p>
        </div>
    )
}

export default UserDetail
