import { useState } from "react";
import UserMenu from "./UserMenu";
import "../styles/Header.css";

export default function DashboardHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <input type="text" placeholder="Search" className="search" />

            <div className="avatar-wrapper">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt="avatar"
                    className="avatar"
                    onClick={() => setMenuOpen(true)}
                />
            </div>

            {menuOpen && (
                <UserMenu
                    onClose={() => setMenuOpen(false)}
                    onLogout={() => {
                        setMenuOpen(false);
                        window.location.href = "/login";
                    }}
                />
            )}
        </header>
    );
}
