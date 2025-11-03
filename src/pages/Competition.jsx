import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Competition.css";

const competitions = [
    {
        title: "Titanic - Machine Learning from Disaster",
        desc: "Start here! Predict survival on the Titanic and get familiar with ML basics.",
        type: "Getting Started",
        teams: "15,201 Teams",
        img: "https://storage.googleapis.com/kaggle-media/competitions/titanic.jpg",
    },

    {
        title: "House Prices - Advanced Regression Techniques",
        desc: "Predict sales prices and practice feature engineering, RFs, and gradient boosting.",
        type: "Getting Started",
        teams: "5,156 Teams",
        img: "https://storage.googleapis.com/kaggle-media/competitions/house-prices.jpg",
    },

    {
        title: "Spaceship Titanic",
        desc: "Predict which passengers are transported to an alternate dimension.",
        type: "Getting Started",
        teams: "1,762 Teams",
        img: "https://storage.googleapis.com/kaggle-media/competitions/spaceship-titanic.jpg",
    },

    {
        title: "LLM Classification Finetuning",
        desc: "Finetune LLMs to predict human preferences from text data.",
        type: "Code Competition",
        teams: "270 Teams",
        img: "https://storage.googleapis.com/kaggle-media/competitions/llm-classification.jpg",
    },

];

export default function Competition() {
    return (
        <div className="competition-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero */}
            <section className="competition-hero">
                <div className="competition-hero-text">
                    <h1>Competitions</h1>
                    <p>
                        Grow your data science skills by competing in our exciting
                        competitions. Find help in the{" "}
                        <a href="#">documentation</a> or learn about{" "}
                        <a href="#">Community Competitions</a>.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-black">Host a Competition</button>
                        <button className="btn-white">Your Work</button>
                    </div>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/competitions/illustration.png"
                    alt="hero"
                    className="competition-hero-img"
                />
            </section>

            {/* Filter Bar */}
            <div className="competition-filterbar">
                <input
                    type="text"
                    placeholder="Search competitions"
                    className="competition-input"
                />
                <button className="filter-btn">Filters</button>
            </div>

            <div className="competition-categories">
                <button className="active">All Competitions</button>
                <button>Featured</button>
                <button>Getting Started</button>
                <button>Research</button>
                <button>Community</button>
                <button>Playground</button>
            </div>

            {/* Section */}
            <section className="competition-section">
                <div className="section-header">
                    <h2>Getting Started</h2>
                    <a href="#" className="see-all">
                        See all →
                    </a>
                </div>
                <p>Competitions with approachable ML fundamentals.</p>

                <div className="competition-grid">
                    {competitions.map((c, i) => (
                        <div className="competition-card" key={i}>
                            <img src={c.img} alt={c.title} className="competition-img" />
                            <div className="competition-info">
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <div className="competition-meta">
                                    <span>{c.type}</span>
                                    <span>{c.teams}</span>
                                </div>
                                <p className="competition-status">Knowledge · Ongoing</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
