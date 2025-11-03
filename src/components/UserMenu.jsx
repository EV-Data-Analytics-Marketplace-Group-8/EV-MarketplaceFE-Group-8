import "../styles/UserMenu.css";

export default function UserMenu({ onClose, onLogout }) {
    return (
        <div className="user-menu-overlay" onClick={onClose}>
            <div className="user-menu" onClick={(e) => e.stopPropagation()}>
                <div className="user-menu-header">
                    <div className="user-info">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                            alt="user"
                            className="user-avatar"
                        />
                        <h3>Tsubasa Oozora</h3>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="user-menu-section">
                    <a href="#">
                        <i className="icon">🗂️</i> Your Work
                    </a>
                    <a href="#">
                        <i className="icon">👤</i> Your Profile
                    </a>
                    <a href="#">
                        <i className="icon">👥</i> Your Groups
                    </a>
                    <a href="#">
                        <i className="icon">⚙️</i> Settings
                    </a>
                    <button className="logout-btn" onClick={onLogout}>
                        <i className="icon">🚪</i> Sign Out
                    </button>
                </div>

                <hr />

                <div className="user-menu-section notifications">
                    <div className="notif-header">
                        <h4>Your notifications</h4>
                        <button className="more-btn">⋯</button>
                    </div>

                    <div className="notif-item">
                        <div className="notif-icon">⭐</div>
                        <div className="notif-text">
                            <p className="notif-title">New Badge Received</p>
                            <p className="notif-body">
                                Congratulations, you've received{" "}
                                <b>Kaggle Community Member</b> badge
                            </p>
                        </div>
                        <span className="notif-time">4d</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
