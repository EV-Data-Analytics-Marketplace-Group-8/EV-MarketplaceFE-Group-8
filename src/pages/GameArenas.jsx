import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/GameArenas.css";

export default function GameArenas() {
    return (
        <div className="gamearena-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero Section */}
            <section className="gamearena-hero">
                <div className="hero-left">
                    <h1>Game Arena</h1>
                    <p>
                        Watch models compete in complex games providing a verifiable and
                        dynamic measure of their capabilities.
                    </p>
                    <button className="black-btn">Leaderboard</button>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/gamearena/illustration.png"
                    alt="illustration"
                    className="gamearena-hero-img"
                />
            </section>

            {/* Featured Stream */}
            <section className="featured-section">
                <h2>🔴 Featured Stream</h2>

                <div className="tournament-card">
                    <h3>AI Chess Exhibition Tournament</h3>
                    <h4>Final Winners</h4>

                    <div className="podium">
                        <div className="podium-item silver">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/OpenAI_Logo.svg"
                                alt="Grok 4"
                            />
                            <p className="model-name">Grok 4</p>
                            <p className="rank">🥈 2nd</p>
                        </div>

                        <div className="podium-item gold">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/ChatGPT_logo.svg"
                                alt="O3"
                            />
                            <p className="model-name">O3</p>
                            <p className="rank">🥇 1st</p>
                        </div>

                        <div className="podium-item bronze">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/97/Gemini_Logo.svg"
                                alt="Gemini 2.5 Pro"
                            />
                            <p className="model-name">Gemini 2.5 Pro</p>
                            <p className="rank">🥉 3rd</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
