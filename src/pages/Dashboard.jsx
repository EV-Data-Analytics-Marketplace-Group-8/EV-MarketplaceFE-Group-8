import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import DashboardStats from "../components/Stats";
import "../styles/Dashboard.css";
import "../styles/Sidebar.css";

export default function Dashboard() {
    const cards = [
        {
            title: "Learn to compete on Kaggle",
            desc: "Improve and test your skills",
        },
        {
            title: "Take a short course",
            desc: "Our courses are the fastest way to learn data science",
        },
        {
            title: "Browse inspiring data and code",
            desc: "Improve your data science projects",
        },
    ];

    return (
        <div className="dashboard-container">
            <DashboardSidebar />

            <main className="dashboard-content">
                <DashboardHeader />

                <section className="welcome">
                    <h2>Welcome!</h2>
                    <p>Kaggle is the place to learn data science and build a portfolio.</p>

                    <DashboardStats />
                </section>

                <section className="cards">
                    {cards.map((c) => (
                        <div key={c.title} className="card">
                            <div className="card-icon">📘</div>
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>
                            <button className="get-started">Get started →</button>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
