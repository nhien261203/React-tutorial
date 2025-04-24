import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { ThemeContext } from "../../ConText/ThemeContext";

const Sidebar = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <>
            <div className="sidebar">
                <div className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                    💡
                </div>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/todos" className={({ isActive }) => isActive ? "active" : ""}>Todos</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>

            </div>
        </>

    )
}

export default Sidebar;