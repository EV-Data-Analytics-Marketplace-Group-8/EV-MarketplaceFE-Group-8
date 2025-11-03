import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <>
            {/* Toggle Button */}
            <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
                ☰
            </button>

            {/* Sidebar Container */}
            <aside className={`sidebar ${open ? "open" : "closed"}`}>
                <div className="sidebar-header">
                    <img
                        src="https://www.kaggle.com/static/images/site-logo.svg"
                        alt="Kaggle Logo"
                        className="kaggle-logo"
                    />
                </div>

                <button className="create-btn">
                    <span className="plus-icon">＋</span> Create
                </button>

                <nav className="menu">
                    <NavLink to="/Dashboard" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828673.png" />
                        Home
                    </NavLink>
                    <NavLink to="/Competition" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/69/69919.png" />
                        Competitions
                    </NavLink>
                    <NavLink to="/Datasets" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" />
                        Datasets
                    </NavLink>
                    <NavLink to="/Models" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1039/1039328.png" />
                        Models
                    </NavLink>
                    <NavLink to="/Benchmarks" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25342.png" />
                        Benchmarks
                    </NavLink>
                    <NavLink to="/GameArenas" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/2871/2871101.png" />
                        Game Arena
                    </NavLink>
                    <NavLink to="/Codes" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/993/993707.png" />
                        Code
                    </NavLink>
                    <NavLink to="/Discussions" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1141/1141139.png" />
                        Discussions
                    </NavLink>
                    <NavLink to="/Learns" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        Learn
                    </NavLink>
                    <NavLink to="/" className="menu-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png" />
                        More
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}
