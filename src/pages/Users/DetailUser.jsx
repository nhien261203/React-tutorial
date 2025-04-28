import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailUser = () => {
    const { id } = useParams(); // Lấy id từ URL
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const response = await axios.get(`https://reqres.in/api/users/${id}`);
    //             setUser(response.data.data);
    //         } catch (err) {
    //             setError("Failed to fetch user details.");
    //         }
    //     };
    //     fetchUser();
    // }, [id]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`, {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                });
                setUser(response.data.data);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to fetch users.');
            }
        };
        fetchUsers();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Loading user details...</p>;
    }

    return (
        <div>
            <h2>User Details</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <div>
                <button type="button" style={{ margin:6}} ><Link to={`/users`}>back</Link></button>
            </div>
        </div>
    );
};

export default DetailUser;