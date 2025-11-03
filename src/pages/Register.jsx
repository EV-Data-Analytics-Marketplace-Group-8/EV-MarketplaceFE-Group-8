import "../styles/Auth.css";

export default function Register() {
    const oauthButtons = [
        { name: "Google", color: "#db4437" },
        { name: "Facebook", color: "#1877f2" },
        { name: "Yahoo", color: "#720e9e" },
        { name: "Email", color: "#555" },
    ];

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="logo-text">kaggle</h1>
                <h2>Create your Kaggle account</h2>
                <p className="text-muted">Sign up with one of the following:</p>

                {oauthButtons.map((btn) => (
                    <button
                        key={btn.name}
                        className="oauth-btn"
                        style={{ backgroundColor: btn.color }}
                    >
                        Register with {btn.name}
                    </button>
                ))}

                <div className="divider">
                    <span>or</span>
                </div>

                <form>
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="submit-btn">Create Account</button>
                </form>

                <p className="text-muted">
                    Already have an account?{" "}
                    <a href="/login" className="link">Sign in here</a>
                </p>
            </div>
        </div>
    );
}
