import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Codes.css";

const trendingNotebooks = [
    {
        title: "PS-s5e11 | h-blend.1.1",
        updated: "Updated 3 hours ago",
        tag: "01-november-2025-PS-s5e11+1",
        likes: 16,
        img: "https://storage.googleapis.com/kaggle-media/code/sample1.jpg",
    },
    {
        title: "Google Code Golf TOP 78 trick + all top : 963172",
        updated: "Updated an hour ago",
        tag: "google-code-golf-2025-submit+1",
        likes: 10,
        img: "https://storage.googleapis.com/kaggle-media/code/sample2.jpg",
    },
    {
        title: "[LB 0.58]CSIRO_Infer",
        updated: "Updated 2 hours ago",
        tag: "convnext_exp1+2",
        likes: 12,
        img: "https://storage.googleapis.com/kaggle-media/code/sample3.jpg",
    },
    {
        title: "ShiftLeft",
        updated: "Updated 38 minutes ago",
        tag: "ARC Prize 2025",
        likes: 11,
        img: "https://storage.googleapis.com/kaggle-media/code/sample4.jpg",
    },
];

export default function Codes() {
    return (
        <div className="code-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero Section */}
            <section className="code-hero">
                <div className="hero-left">
                    <h1>Code</h1>
                    <p>
                        Explore and run machine learning code with Kaggle Notebooks. Find help in the{" "}
                        <a href="#">Documentation</a>.
                    </p>
                    <div className="code-buttons">
                        <button className="black-btn">＋ New Notebook ⌄</button>
                        <button className="white-btn">Your Work</button>
                    </div>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/code/illustration.png"
                    alt="illustration"
                    className="code-hero-img"
                />
            </section>

            {/* Filters */}
            <div className="code-filters">
                <input type="text" placeholder="Search public notebooks" />
                <button className="filter-btn">Filters</button>
            </div>

            <div className="code-categories">
                <button className="active">All notebooks</button>
                <button>Recently Viewed</button>
                <button>Package</button>
                <button>Python</button>
                <button>R</button>
                <button>Beginner</button>
                <button>NLP</button>
                <button>Random Forest</button>
                <button>GPU</button>
                <button>TPU</button>
            </div>

            {/* Trending Section */}
            <section className="code-section">
                <div className="section-header">
                    <h2>🔥 Trending</h2>
                    <a href="#" className="see-all">
                        See all (524)
                    </a>
                </div>

                <div className="code-grid">
                    {trendingNotebooks.map((n, i) => (
                        <div className="code-card" key={i}>
                            <img src={n.img} alt={n.title} className="code-img" />
                            <div className="code-info">
                                <h3>{n.title}</h3>
                                <p className="code-updated">{n.updated}</p>
                                <p className="code-tag">{n.tag}</p>
                                <div className="code-footer">
                                    <span>❤️ {n.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
