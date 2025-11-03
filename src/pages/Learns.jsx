import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Learns.css";

const courses = [
    {
        name: "Intro to Programming",
        desc: "Get started with Python, if you have no coding experience.",
        icon: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
        color: "#3BAFDA",
    },
    {
        name: "Python",
        desc: "Learn the most important language for data science.",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        color: "#FFD93D",
    },
    {
        name: "Intro to Machine Learning",
        desc: "Learn the core ideas in machine learning, and build your first models.",
        icon: "https://cdn-icons-png.flaticon.com/512/4712/4712003.png",
        color: "#3BAFDA",
    },
    {
        name: "Pandas",
        desc: "Solve short hands-on challenges to perfect your data manipulation skills.",
        icon: "https://cdn-icons-png.flaticon.com/512/2874/2874786.png",
        color: "#FFD93D",
    },
    {
        name: "Intermediate Machine Learning",
        desc: "Handle missing values, non-numeric values, data leakage, and more.",
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039498.png",
        color: "#FFD93D",
    },
    {
        name: "Data Visualization",
        desc: "Learn to visualize data effectively and communicate insights clearly.",
        icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
        color: "#3BAFDA",
    },
];

export default function Learns() {
    return (
        <div className="learn-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero */}
            <section className="learn-hero">
                <div className="hero-left">
                    <h1>Learn</h1>
                    <p>
                        Gain the skills you need to do independent data science projects.
                    </p>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/learn/illustration.png"
                    alt="illustration"
                    className="learn-hero-img"
                />
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="courses-header">
                    <h2>📊 Courses</h2>
                    <p>
                        We pare down complex topics to their key practical components, so
                        you gain usable skills in a few hours (instead of weeks or months).
                        The courses are provided at no cost to you, and you can now earn
                        certificates.{" "}
                        <a href="#">Learn more about courses.</a>
                    </p>
                </div>

                <div className="course-list">
                    {courses.map((c, i) => (
                        <div className="course-item" key={i}>
                            <div
                                className="course-icon"
                                style={{ backgroundColor: c.color }}
                            >
                                <img src={c.icon} alt={c.name} />
                            </div>
                            <div className="course-text">
                                <h3>{c.name}</h3>
                                <p>{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
