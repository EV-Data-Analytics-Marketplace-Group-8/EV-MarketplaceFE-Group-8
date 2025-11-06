import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
    const [activeTab, setActiveTab] = useState("signin");
    const navigate = useNavigate();

    const handleLogin = () => {
        // sau khi bấm đăng nhập, điều hướng đến dashboard
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <img
                    src="https://www.kaggle.com/static/images/site-logo.svg"
                    alt="Kaggle Logo"
                    className="auth-logo"
                />
                <h2 className="auth-title">Welcome!</h2>

                <div className="auth-tabs">
                    <button
                        className={activeTab === "signin" ? "active" : ""}
                        onClick={() => setActiveTab("signin")}
                    >
                        Sign In
                    </button>
                    <button
                        className={activeTab === "register" ? "active" : ""}
                        onClick={() => {
                            setActiveTab("register");
                            navigate("/register");
                        }}
                    >
                        Register
                    </button>
                </div>

                <div className="auth-buttons">
                    <button className="auth-btn google" onClick={handleLogin}>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" />
                        Sign in with Google
                    </button>
                    <button className="auth-btn email" onClick={handleLogin}>
                        <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="email" />
                        Sign in with Email
                    </button>
                    <button className="auth-btn facebook" onClick={handleLogin}>
                        <img src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-host-and-admin-marketing-job-vacancies-vector-png-image_6480101.png" alt="admin" />
                        Sign in as admin
                    </button>
                </div>

                <p className="auth-footer">
                    Don’t have an account?{" "}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/register");
                        }}
                    >
                        Create one
                    </a>
                </p>

                <div className="auth-corner" />
            </div>

            <p className="auth-support">
                <a href="#">Contact Us / Support</a>
            </p>
        </div>
    );
}
