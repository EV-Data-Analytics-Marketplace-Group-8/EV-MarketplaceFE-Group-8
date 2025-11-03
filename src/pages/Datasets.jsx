import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Datasets.css";

const datasetList = [
    {
        title: "Comparison Long Only vs Trend follow",
        author: "willian oliveira",
        update: "Updated 17 hours ago",
        usability: "10.0",
        size: "34 kB",
        downloads: "58 downloads",
        files: "1 File (CSV)",
        likes: "8",
        img: "https://storage.googleapis.com/kaggle-media/datasets/sample1.jpg",
    },
    {
        title: "Fault Detection in Rotatory Machines",
        author: "Shubham raj Gupta",
        update: "Updated 11 hours ago",
        usability: "8.8",
        size: "23 MB",
        downloads: "27 downloads",
        files: "684 Files (other)",
        likes: "9",
        img: "https://storage.googleapis.com/kaggle-media/datasets/sample2.jpg",
    },
    {
        title: "Students_Academic_Perform",
        author: "Sadia javed",
        update: "Updated 9 days ago",
        usability: "10.0",
        size: "9 kB",
        downloads: "449 downloads",
        files: "1 File (CSV)",
        likes: "15",
        img: "https://storage.googleapis.com/kaggle-media/datasets/sample3.jpg",
    },
    {
        title: "Fitness Tracker Dataset",
        author: "Prince Rajak",
        update: "Updated 14 days ago",
        usability: "8.8",
        size: "6 kB",
        downloads: "382 downloads",
        files: "1 File (CSV)",
        likes: "9",
        img: "https://storage.googleapis.com/kaggle-media/datasets/sample4.jpg",
    },
];

export default function Datasets() {
    return (
        <div className="datasets-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero Section */}
            <section className="datasets-hero">
                <div className="hero-left">
                    <h1>Datasets</h1>
                    <p>
                        Explore, analyze, and share quality data.{" "}
                        <a href="#">Learn more</a> about data types, creating, and
                        collaborating.
                    </p>
                    <div className="datasets-buttons">
                        <button className="black-btn">＋ New Dataset</button>
                        <button className="white-btn">Your Work</button>
                    </div>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/datasets/illustration.png"
                    alt="illustration"
                    className="datasets-hero-img"
                />
            </section>

            {/* Filter Bar */}
            <div className="datasets-filterbar">
                <input type="text" placeholder="Search datasets" />
                <button className="filter-btn">Filters</button>
            </div>

            <div className="datasets-categories">
                <button className="active">All datasets</button>
                <button>Computer Science</button>
                <button>Education</button>
                <button>Classification</button>
                <button>Computer Vision</button>
                <button>NLP</button>
                <button>Data Visualization</button>
                <button>Pre-Trained Model</button>
            </div>

            {/* Trending Section */}
            <section className="datasets-section">
                <div className="section-header">
                    <h2>🔥 Trending Datasets</h2>
                    <a href="#" className="see-all">
                        See All →
                    </a>
                </div>

                <div className="datasets-grid">
                    {datasetList.map((d, i) => (
                        <div className="dataset-card" key={i}>
                            <img src={d.img} alt={d.title} className="dataset-img" />
                            <div className="dataset-info">
                                <h3>{d.title}</h3>
                                <p>
                                    {d.author} · {d.update}
                                </p>
                                <p className="dataset-meta">
                                    Usability {d.usability} · {d.size} · {d.downloads}
                                </p>
                                <p className="dataset-files">{d.files}</p>
                                <div className="dataset-footer">
                                    <span>❤️ {d.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
