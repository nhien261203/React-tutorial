import React from "react";
import logo from '../assets/images/hoa2.jpg';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser } from "../redux/actions";


const Home = () => {
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const handleAdd = () => {
        if (!name) return alert("Vui lòng nhập tên!");

        const lastUserId = users.length > 0 ? users[users.length-1].id : 0;
        const newUser = {
            id: lastUserId+1,
            name,
        };
        dispatch( addUser(newUser));
        setName("");
    };

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <>
            <div>
                <p>Hello from Home Page</p>
            </div>
            <div>
                <img src={logo} style={{ width: '300px', height: '400px', marginTop: '20px' }} />
            </div>

            <div>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.id}
                            {user.name}
                            <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(user.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>

                <div style={{ marginTop: "20px" }}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Tên người dùng mới"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleAdd} style={{ marginLeft: "10px" }}>Thêm</button>
                </div>
            </div>

        </>

    )
}

export default Home;