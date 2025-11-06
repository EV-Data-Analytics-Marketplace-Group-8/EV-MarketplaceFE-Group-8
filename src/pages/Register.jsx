import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
    const [activeTab, setActiveTab] = useState("register");
    const navigate = useNavigate();

    const handleRegister = () => {
        // sau khi bấm đăng ký, điều hướng đến dashboard
        navigate("/dashboard");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <img
                    src="https://www.kaggle.com/static/images/site-logo.svg"
                    alt="Kaggle Logo"
                    className="register-logo"
                />
                <h2 className="register-title">Welcome!</h2>

                <div className="register-tabs">
                    <button
                        className={activeTab === "signin" ? "active" : ""}
                        onClick={() => {
                            setActiveTab("signin");
                            navigate("/login");
                        }}
                    >
                        Sign In
                    </button>
                    <button className={activeTab === "register" ? "active" : ""}>
                        Register
                    </button>
                </div>

                <div className="register-buttons">
                    <button className="register-btn google" onClick={handleRegister}>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" />
                        Register with Google
                    </button>
                    <button className="register-btn email" onClick={handleRegister}>
                        <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="email" />
                        Register with Email
                    </button>
                </div>

                <p className="register-footer">
                    Have an account?{" "}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                    >
                        Sign in
                    </a>
                </p>

                <div className="register-corner" />
            </div>

            <p className="register-legal">
                When you link your Google account, Kaggle collects certain information
                stored in that account that you have configured to make available. By
                linking your accounts, you authorize Kaggle to access and use your
                account on the third party service in connection with your use of
                kaggle.com.
            </p>

            <p className="register-support">
                <a href="#">Contact Us / Support</a>
            </p>
        </div>
    );
}
