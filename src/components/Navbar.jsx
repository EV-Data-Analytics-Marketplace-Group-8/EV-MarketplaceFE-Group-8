import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">
                    <img
                        src="https://www.kaggle.com/static/images/site-logo.svg"
                        alt="Kaggle Logo"
                    />
                </Link>

                <nav className="nav-links">
                    <Link to="/Competition">Competitions</Link>
                    <Link to="/Datasets">Datasets</Link>
                    <Link to="/Models">Models</Link>
                    <Link to="/Codes">Code</Link>
                    <Link to="/Discussions">Discussions</Link>
                    <Link to="#">Blog</Link>
                    <Link to="#">Courses</Link>
                </nav>
            </div>

            <div className="nav-right">
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                </div>
                <Link to="/login" className="signin">
                    Sign In
                </Link>
                <Link to="/register" className="register">
                    Register
                </Link>
            </div>
        </header>
    );
}
