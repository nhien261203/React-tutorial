import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import "./components/Sidebar/Sidebar.jsx"
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Todos from "./pages/Todos.jsx";
import Users from "./pages/Users.jsx";
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from './ConText/ThemeContext.jsx'
import { useContext } from "react";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <div className={`app-container ${theme}`}>
                <Sidebar /> 
                
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todos" element={<Todos />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </div>
                {/* // toastity */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </BrowserRouter>
    );
}


export default App
