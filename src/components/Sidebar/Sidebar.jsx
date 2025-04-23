import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar= () => {
    return (
        <div className="sidebar">
            <NavLink to="/" className={({isActive})=> isActive ? "active": ""}>Home</NavLink>
            <NavLink to="/todos" className={({ isActive }) => isActive ? "active" : ""}>Todos</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>

        </div>
    )
}

export default Sidebar;