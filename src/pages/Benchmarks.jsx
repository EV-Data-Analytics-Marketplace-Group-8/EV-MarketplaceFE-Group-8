import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Benchmarks.css";

const benchmarks = [
    {
        title: "SciCode",
        author: "Open Benchmarks",
        desc: "A Research Coding Benchmark Curated by Scientists",
        suite: "Suite (4 benchmarks)",
        scores: [
            { name: "OpenAI", percent: 10 },
            { name: "Anthropic", percent: 9 },
            { name: "Google", percent: 7 },
        ],
    },
    {
        title: "SimpleQA Verified",
        author: "Google DeepMind",
        desc: "A reliable factuality benchmark to measure parametric knowledge.",
        suite: "Suite (10 benchmarks)",
        scores: [
            { name: "Google", percent: 54 },
            { name: "Anthropic", percent: 53 },
            { name: "OpenAI", percent: 52 },
        ],
    },
    {
        title: "ICML 2025 Experts",
        author: "Kaggle",
        desc: "Task leaderboard for ICML 2025 Experts Benchmark crowdsourced in Vancouver.",
        suite: "Suite (6 benchmarks)",
        scores: [
            { name: "Google", percent: 81 },
            { name: "Anthropic", percent: 75 },
            { name: "OpenAI", percent: 70 },
        ],
    },
    {
        title: "Chess",
        author: "Kaggle",
        desc: "Kaggle Game Arena benchmark designed to evaluate and compare the strategic AI models.",
        suite: "Suite (2 benchmarks)",
        scores: [
            { name: "OpenAI", percent: 1397 },
            { name: "xAI", percent: 1112 },
            { name: "Google", percent: 1061 },
        ],
    },
];

export default function Benchmarks() {
    return (
        <div className="benchmarks-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero Section */}
            <section className="benchmarks-hero">
                <div className="hero-left">
                    <h1>Benchmarks</h1>
                    <p>
                        Discover open, rigorous benchmarks and model leaderboards from top AI labs and researchers in one place.
                        Learn more in the <a href="#">Documentation</a>.
                    </p>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/benchmarks/illustration.png"
                    alt="illustration"
                    className="benchmarks-hero-img"
                />
            </section>

            {/* Search and Filters */}
            <div className="benchmarks-filters">
                <input type="text" placeholder="Search Benchmarks" />
                <div className="filter-tags">
                    <button>All Benchmarks</button>
                    <button>Type</button>
                    <button>Task</button>
                    <button>Creator</button>
                </div>
            </div>

            {/* Featured Benchmarks */}
            <section className="benchmarks-section">
                <div className="section-header">
                    <h2>⭐ Featured Benchmarks</h2>
                    <p>Explore a rotation of featured benchmarks curated by the Kaggle team</p>
                </div>

                <div className="benchmarks-grid">
                    {benchmarks.map((b, i) => (
                        <div className="benchmark-card" key={i}>
                            <h3>{b.title}</h3>
                            <p className="author">{b.author}</p>
                            <p className="desc">{b.desc}</p>
                            <p className="suite">{b.suite}</p>

                            <div className="scores">
                                <p className="score-label">CURRENT TOP 3</p>
                                {b.scores.map((s, j) => (
                                    <div key={j} className="score-row">
                                        <span className="score-name">{s.name}</span>
                                        <div className="score-bar">
                                            <div
                                                className="score-fill"
                                                style={{ width: `${Math.min(s.percent, 100)}%` }}
                                            ></div>
                                        </div>
                                        <span className="score-value">{s.percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
