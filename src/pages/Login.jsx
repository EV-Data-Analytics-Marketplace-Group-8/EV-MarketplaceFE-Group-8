import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

export default function Login() {
    const [tab, setTab] = useState("signin");
    const navigate = useNavigate();

    const oauthButtons = [
        { name: "Google", color: "#db4437" },
        { name: "Facebook", color: "#1877f2" },
        { name: "Yahoo", color: "#720e9e" },
        { name: "Email", color: "#555" },
    ];

    const handleSignIn = (provider) => {
        // Khi người dùng click vào Email, chuyển tới dashboard
        if (provider === "Email") navigate("/dashboard");
        else alert(`Fake OAuth: Logged in with ${provider}`);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="tabs">
                    <button
                        className={tab === "signin" ? "active" : ""}
                        onClick={() => setTab("signin")}
                    >
                        Sign In
                    </button>
                    <button
                        className={tab === "register" ? "active" : ""}
                        onClick={() => setTab("register")}
                    >
                        Register
                    </button>
                </div>

                {tab === "signin" ? (
                    <div>
                        <h2>Sign In to Kaggle</h2>
                        {oauthButtons.map((btn) => (
                            <button
                                key={btn.name}
                                className="oauth-btn"
                                style={{ backgroundColor: btn.color }}
                                onClick={() => handleSignIn(btn.name)}
                            >
                                Sign in with {btn.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>Create your Kaggle account</h2>
                        {oauthButtons.map((btn) => (
                            <button
                                key={btn.name}
                                className="oauth-btn"
                                style={{ backgroundColor: btn.color }}
                            >
                                Register with {btn.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
