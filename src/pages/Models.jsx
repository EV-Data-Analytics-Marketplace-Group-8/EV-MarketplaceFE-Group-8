import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Models.css";

const trendingModels = [
    {
        title: "Qwen 3 VL",
        publisher: "QwenLM",
        subtitle: "Vision Transformer",
        updated: "Updated 10d ago · 24 Variations",
        desc: "Qwen3-VL is the most powerful vision-language model.",
        likes: "155",
        notebooks: "1 Notebook",
        logo: "https://cdn-icons-png.flaticon.com/512/1048/1048944.png",
    },
    {
        title: "Gemma",
        publisher: "Google",
        updated: "Updated 1y ago · 59 Variations",
        desc: "Gemma is a family of lightweight, open models.",
        likes: "13637",
        notebooks: "379 Notebooks",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
        title: "Qwen2.5",
        publisher: "QwenLM",
        updated: "Updated 1y ago · 42 Variations",
        desc: "Qwen2.5 is the latest series of Qwen large language models.",
        likes: "225",
        notebooks: "259 Notebooks",
        logo: "https://cdn-icons-png.flaticon.com/512/1048/1048944.png",
    },
    {
        title: "Granite 4.0",
        publisher: "IBM",
        updated: "Updated 1mo ago · 10 Variations",
        desc: "Enterprise-ready multimodal models delivering high performance.",
        likes: "54",
        notebooks: "1 Notebook",
        logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
];

export default function Models() {
    return (
        <div className="models-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero Section */}
            <section className="models-hero">
                <div className="hero-left">
                    <h1>Models</h1>
                    <p>
                        Discover and use thousands of machine learning models, including the
                        most popular diffusion models and LLMs.{" "}
                        <a href="#">Learn how to share with the community</a> and use the{" "}
                        <a href="#">kagglehub library</a>.
                    </p>
                    <div className="models-buttons">
                        <button className="black-btn">＋ New Model</button>
                        <button className="white-btn">Your Work</button>
                    </div>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/models/illustration.png"
                    alt="illustration"
                    className="models-hero-img"
                />
            </section>

            {/* Filters */}
            <div className="models-filters">
                <input type="text" placeholder="Search Models" />
                <div className="filter-tags">
                    <button>All Filters</button>
                    <button>All Models</button>
                    <button>Task</button>
                    <button>Data Type</button>
                    <button>Framework</button>
                    <button>Publisher</button>
                    <button>Language</button>
                    <button>License</button>
                </div>
            </div>

            {/* Trending Models */}
            <section className="models-section">
                <div className="section-header">
                    <h2>🔥 Trending Models</h2>
                    <a href="#" className="see-all">See All →</a>
                </div>

                <div className="models-grid">
                    {trendingModels.map((m, i) => (
                        <div className="model-card" key={i}>
                            <div className="model-header">
                                <img src={m.logo} alt="logo" />
                                <div>
                                    <h3>{m.title}</h3>
                                    <p className="publisher">{m.publisher} · {m.subtitle}</p>
                                </div>
                            </div>
                            <p className="model-updated">{m.updated}</p>
                            <p className="model-desc">{m.desc}</p>
                            <div className="model-footer">
                                <span>❤️ {m.likes}</span>
                                <span>{m.notebooks}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recently Viewed */}
            <section className="models-section">
                <div className="section-header">
                    <h2>🕓 Recently Viewed Models</h2>
                    <a href="#" className="see-all">See All →</a>
                </div>
                <div className="empty-box">No recently viewed models yet.</div>
            </section>
        </div>
    );
}
