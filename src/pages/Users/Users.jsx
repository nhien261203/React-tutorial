import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                });
                setUsers(response.data.data);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to fetch users.');
            }
        };
        fetchUsers();
    }, []);
    

    const handleClickUser = (id) => {
        navigate(`/users/${id}`);
    }
    return (
        <>
            <div>
                <h2>Fetch All Users</h2>
                {error && <p>{error}</p>}
                <ul style={{listStyleType: "none", padding: 5}}>
                    {users.map((user) => (
                        <li key={user.id} 
                        onClick={() => handleClickUser(user.id)}
                        style={{cursor: "pointer"}}
                        >
                            {user.first_name} {user.last_name}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Users;