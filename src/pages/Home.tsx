import React, { useEffect, useState } from 'react'
import axios from 'axios'


interface userType {
    name: string;
    username: string;
    email: string;
}

export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    return (
        <div className='container'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Emai</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: userType, index: number) => (
                                <tr>
                                    <th key={index}>{index + 1}</th>
                                    <td >{user.name}</td>
                                    <td >{user.username}</td>
                                    <td >{user.email}</td>
                                    <td>
                                        <button className='bg-primary px-32'>View</button>
                                        <button className='bg-secondary'>Edit</button>
                                        <button className='bg-accent'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
